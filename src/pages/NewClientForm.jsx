import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import axios_instance from "../utils/axios_instance";

const NewClientForm = () => {
    /* ----- State ----- */
    const [client, setClient] = useState({
        name: '',
        last_name: '',
        company: '',
        email: '',
        phone: '',
    });

    /* ----- Hooks ----- */
    const navigate = useNavigate();
    
    /**
     * Fill *client state* attributes with the input value.
     * 
     * @param {Object} event 
     */
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setClient({
            ...client,
            [name]: value
        });
    };

    /**
     * Check if all fields are not empty.
     * 
     * @returns {boolean}
     */
    const validateForm = () => {
        const attributes = Object.values(client);

        const is_valid = attributes.every((item) => {
            return item.length > 0;
        });

        return !is_valid;
    };

    /**
     * Send form and add new client.
     * 
     * @param {Object} event 
     */
    const addNewClient = (event) => {
        event.preventDefault();

        axios_instance.post('/clientes', client)
            .then((response) => {
                if (response.data.code === 11000) {
                    Swal.fire({
                        title: 'Hubo un error',
                        text: 'El correo ya existe en la base de datos.',
                        icon: 'error',
                    });
                } else {
                    Swal.fire({
                        title: 'Cliente agregado',
                        text: response.data.message,
                        icon: 'success',
                    });
                }

                navigate('/');
            });
    };

    return (
        <>
            <h2>Nuevo cliente</h2>

            <form onSubmit={addNewClient}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre Cliente"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Apellido Cliente"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Empresa Cliente"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Cliente"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono Cliente"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="enviar">
                    <input
                        type="submit"
                        value="Agregar Cliente"
                        className="btn btn-azul"
                        disabled={validateForm()}
                    />
                </div>
            </form>
        </>
    );
};
export default NewClientForm;