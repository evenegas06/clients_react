import { useEffect, useState } from "react";
// import axios_instance from "../utils/axios_instance";
import axios from "axios";

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
                const clients = await axios.get('http://localhost:5000/api/clientes');
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
                    console.log(item);
                })}
            </ul>
        </>
    );
};
export default Clients;