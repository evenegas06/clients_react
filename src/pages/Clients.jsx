import { useEffect, useState } from "react";
import axios_instance from "../utils/axios_instance";
import Client from "../components/Client";

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