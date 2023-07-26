import { useState } from "react";

const NewClientForm = () => {
    /* ----- State ----- */
    const [client, setClient] = useState({
        name: '',
        last_name: '',
        company: '',
        email: '',
        phone: '',
    });

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

    return (
        <>
            <h2>Nuevo cliente</h2>

            <form>
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
                    />
                </div>

            </form>
        </>
    );
};
export default NewClientForm;