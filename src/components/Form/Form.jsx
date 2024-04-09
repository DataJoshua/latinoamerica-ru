import React, { useState } from 'react';
import "../../styles/Form.css";
import "../../styles/Success.css"

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

            const response = await fetch('https://sheet.best/api/sheets/f141ff2c-2e7f-4fcb-9141-279bfb09ac71', {
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
                    "Dia 2": day2Value
                })
            });

            if (response.ok) {
                console.log('Formulario enviado con éxito');
                setFormSubmitted(true);
            } else {
                console.error('Error al enviar el formulario:', response.statusText);
            }
        } catch (error) {
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
                    <form onSubmit={handleSubmit} className="form">
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
                            <select
                                value={faculty}
                                onChange={(e) => setFaculty(e.target.value)}
                            >
                                <option value="">Seleccione una facultad</option>
                                {/* Aquí puedes agregar opciones de facultades */}
                            </select>
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
                        <button type="submit" className="submit-button">Enviar</button>
                    </form>
                </div>
            ) : (
                <div className="success-container">
                    <h2>¡Formulario enviado con éxito!, por favor se responsable y no hagas spam :(</h2>
                    <p>Te esperamos para que nos acompanes en este maravilloso evento</p>
                    <button className="submit-button" onClick={handleResetForm}>Enviar otro formulario</button>
                </div>
            )}
        </div>
    );
}

export default Form;
