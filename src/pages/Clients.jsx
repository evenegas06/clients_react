import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Client from "../components/Client";

import axios_instance from "../utils/axios_instance";

const Clients = () => {
    /* ----- State ----- */
    const [clients, setClients] = useState([]);

    /* ----- Hooks ----- */
    useEffect(() => {
        /**
         * Get all clients from API.
         */
        const getClients = async () => {
            try {
                const clients = await axios_instance.get('/clientes');
                setClients(clients.data);
            } catch (error) {
                console.error(error);
            }
        };

        getClients();
    }, []);

    return (
        <>
            <h2>Clientes</h2>

            <Link to="/clientes/nuevo" className="btn btn-verde nvo-cliente">
                <i className="fas fa-plus-circle icon-btn"></i>
                Nuevo Cliente
            </Link>

            <ul className="listado-clientes">
                {clients.map((item) => {
                    return (
                        <Client key={item._id} client={item} />
                    );
                })}
            </ul>
        </>
    );
};
export default Clients;