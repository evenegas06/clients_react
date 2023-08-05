import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";

import axios_instance from "../utils/axios_instance";

const EditClient = () => {

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
    const { client_id } = useParams();

    useEffect(() => {
        /**
         * Get client data from API.
         */
        const getClientData = async () => {
            const client = await axios_instance.get(`/clientes/${client_id}`);

            delete client.data.__v;
            setClient(client.data);
        };

        getClientData();
    }, []);

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

    return (
        <>
            <h2>Editar cliente</h2>

            <form>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre Cliente"
                        value={client.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Apellido Cliente"
                        value={client.last_name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Empresa Cliente"
                        value={client.company}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Cliente"
                        value={client.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono Cliente"
                        value={client.phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="enviar">
                    <input
                        type="submit"
                        value="Guardar Cambios"
                        className="btn btn-azul"
                        disabled={validateForm()}
                    />
                </div>

            </form>
        </>
    );
};
export default EditClient;