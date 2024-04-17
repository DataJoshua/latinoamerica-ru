import React, { useState } from 'react';
import Button from "../../atoms/Button.jsx";
import "../../styles/Form.css";
import "../../styles/Success.css"
import Spinner from '../../atoms/Spinner.jsx';
import universidades from './universidades.json';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Form({ isActive, handleOnFormDismiss = ()=> {} }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');
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

    const handleUniversityChange = (e) => {
        setUniversity(e.target.value);
    }

    const maskPhoneNumber = (rawPhoneNumber) => {
        return rawPhoneNumber.replace(/[A-Za-z]/g, "")
                             .replace(/[!@#$%^&*_-]/g, "");
    };

    const maskOnlyCirilicLetters = (rawValue) => {
        return rawValue.replace(/[^а-я\s]/gi, "");
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
                    Universidad: university,
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
        setUniversity('');
        setAttendDay('');
        setFormSubmitted(false);
    };

    return (
        <div className={`${isActive ? "" : "hidden"} lg:block`}>
            {!formSubmitted ? (
                <div className="form-container scale-[0.90] sm:scale-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:translate-x-[0px] sm:translate-y-[0px] sm:left-[10%] sm:top-[17%] lg:left-[15%]">
                    <p className="animate-pulse py-2 text-red-800 text-md">Por favor llenar el nombre y apellido solo en <span className="font-bold">Ruso</span></p>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label>Nombre/Имя:</label>
                            <input
                                type="text"
                                value={maskOnlyCirilicLetters(firstName)}
                                onChange={handleFirstNameChange}
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Apellido/Фамилия:</label>
                            <input
                                type="text"
                                value={maskOnlyCirilicLetters(lastName)}
                                onChange={handleLastNameChange}
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Teléfono/Номер Телефона:</label>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e)=> setPhoneNumber(maskPhoneNumber(e.target.value)) }
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Universidad/Университет:</label>
                            <select
                                value={university}
                                onChange={handleUniversityChange}
                                required
                            >
                                {universidades.map((option, index) => (
                                    <option key={index} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Asistiré el día/Я буду присутствовать в день:</label>
                            <select
                                value={attendDay}
                                onChange={(e) => setAttendDay(e.target.value)}
                                required
                            >
                                <option value="">Seleccione un día</option>
                                <option value="Día 1">Día 1/День1</option>
                                <option value="Día 2">Día 2/День2</option>
                                <option value="Ambos días">Ambos días/Оба дня</option>
                            </select>
                        </div>
                        {isLoading ? <Spinner isSmall/> : <Button type="submit" label="Enviar / Отправить" />}
                        <div className="lg:hidden w-full">
                            <Button label="Ver el Horario / Посмотреть расписание" extraClass="w-full" handleOnClick={handleOnFormDismiss}/>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="success-container scale-[0.90] sm:scale-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:translate-x-[0px] sm:translate-y-[0px] sm:left-[10%] sm:top-[17%] lg:left-[15%] flex gap-3 flex-col">
                    <h2 className="sm:text-lg">¡Formulario enviado con éxito!, por favor se responsable y no hagas spam :(/Форма успешно отправлена!
                        будьте добры не спамить, пожалуйста :(
                    </h2>
                    <p className="sm:text-lg">Te esperamos para que nos acompañes en este maravilloso evento/Ждём вас на нашем незабываемом мероприятии!</p>
                    <Button handleOnClick={handleResetForm} label="Enviar otro formulario/отправить другую форму"/>
                </div>
            )}
        </div>
    );
}

export default Form;
