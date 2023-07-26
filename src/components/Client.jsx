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
                <a href="#" className="btn btn-azul">
                    <i className="fas fa-pen-alt"></i>
                    Editar Cliente
                </a>

                <button type="button" className="btn btn-rojo btn-eliminar">
                    <i className="fas fa-times"></i>
                    Eliminar Cliente
                </button>
            </div>
        </li>
    );
};
export default Client;