import React, { useState } from 'react';
import Button from "../../atoms/Button.jsx";
import "../../styles/Form.css";
import "../../styles/Success.css"
import Spinner from '../../atoms/Spinner.jsx';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [faculty, setFaculty] = useState('');
    const [attendDay, setAttendDay] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario ha sido enviado
    const [isLoading, setIsLoading] = useState(false)

    const getCurrentDate = (separator = '-') => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();
        let seconds = newDate.getSeconds();
    
        if (month < 10) month = '0' + month;
        if (date < 10) date = '0' + date;
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
    
        return `${year}${separator}${month}${separator}${date} ${hours}:${minutes}:${seconds}`;
    }

    const handleFirstNameChange = (e) => {
        setFirstName(capitalizeFirstLetter(e.target.value));
    };

    const handleLastNameChange = (e) => {
        setLastName(capitalizeFirstLetter(e.target.value));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const day1Value = attendDay === "Día 1" || attendDay === "Ambos días" ? "Sí" : "No";
            const day2Value = attendDay === "Día 2" || attendDay === "Ambos días" ? "Sí" : "No";
            setIsLoading(true)

            const response = await fetch(process.env.REACT_APP_SHEET_BEST_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: firstName,
                    Apellido: lastName,
                    Telefono: phoneNumber,
                    Facultad: faculty,
                    "Dia 1": day1Value,
                    "Dia 2": day2Value,
                    Fecha: getCurrentDate()
                })
            });

            if (response.ok) {
                console.log('Formulario enviado con éxito');
                setIsLoading(false)
                setFormSubmitted(true);
            } else {
                setIsLoading(false)
                console.error('Error al enviar el formulario:', response.statusText);
            }
        } catch (error) {
            setIsLoading(false)
            console.error('Error al enviar el formulario:', error);
        }
    };

    const handleResetForm = () => {
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setFaculty('');
        setAttendDay('');
        setFormSubmitted(false);
    };

    return (
        <div className="">
            {!formSubmitted ? (
                <div className="form-container scale-[0.90] sm:scale-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:translate-x-[0px] sm:translate-y-[0px] sm:left-[10%] sm:top-[17%] lg:left-[15%]">
                    <h1 className="font-bold text-center text-lg py-1">Registrate, te esperamos :)</h1>
                    <form className="form">
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Apellido:</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={handleLastNameChange}
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Teléfono:</label>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Facultad:</label>
                            <input
                                value={faculty}
                                onChange={(e) => setFaculty(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Asistiré el día:</label>
                            <select
                                value={attendDay}
                                onChange={(e) => setAttendDay(e.target.value)}
                            >
                                <option value="">Seleccione un día</option>
                                <option value="Día 1">Día 1</option>
                                <option value="Día 2">Día 2</option>
                                <option value="Ambos días">Ambos días</option>
                            </select>
                        </div>
                        {isLoading ? <Spinner isSmall/> : <Button handleOnClick={handleSubmit} label="Enviar" />}
                    </form>
                </div>
            ) : (
                <div className="success-container scale-[0.90] sm:scale-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:translate-x-[0px] sm:translate-y-[0px] sm:left-[10%] sm:top-[17%] lg:left-[15%] flex gap-3 flex-col">
                    <h2 className="sm:text-lg">¡Formulario enviado con éxito!, por favor se responsable y no hagas spam :(</h2>
                    <p className="sm:text-lg">Te esperamos para que nos acompanes en este maravilloso evento</p>
                    <Button handleOnClick={handleResetForm} label="Enviar otro formulario"/>
                </div>
            )}
        </div>
    );
}

export default Form;
