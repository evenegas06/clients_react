import { Link } from "react-router-dom";

const Client = ({ client }) => {
    return (
        <li className="cliente">
            <div className="info-cliente">
                <p className="nombre">
                    {`${client.name} ${client.last_name}`}
                </p>
                
                <p className="empresa">
                    {client.company}
                </p>
                
                <p>{client.email}</p>
                <p>{client.phone}</p>
            </div>
            
            <div className="acciones">
                <Link to={`/clientes/editar/${client._id}`} className="btn btn-azul">
                    <i className="fas fa-pen-alt icon-btn"></i>
                    Editar
                </Link>

                <button type="button" className="btn btn-rojo btn-eliminar">
                    <i className="fas fa-times icon-btn"></i>
                    Eliminar
                </button>
            </div>
        </li>
    );
};
export default Client;