import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios_instance from '../utils/axios_instance';

const NewOrder = () => {
    /* ----- State ----- */
    const [client, setClient] = useState({});
	/* ----- Hooks ----- */
	const { client_id } = useParams();

	useEffect(() => {
        /**
         * Get client info by API.
         */
        const getClientData = async () => {
            const data = await axios_instance.get(`/clientes/${client_id}`);
			console.log(data);
            setClient(data.data);
        };

        getClientData();
    }, []);

	return (
		<>
			<h2>Nuevo Pedido</h2>

			<div className="ficha-cliente">
				<h3>Datos de Cliente</h3>
				<p>{`Nombre: ${client.name} ${client.last_name}`}</p>
				<p>{`Teléfono: ${client.phone}`}</p>
			</div>

			<form>
				<legend>Busca un Producto y agrega una cantidad</legend>

				<div className="campo">
					<label>Productos:</label>
					<input
						type="text"
						placeholder="Nombre Productos"
						name="productos"
					/>
				</div>

				<ul className="resumen">
					<li>
						<div className="texto-producto">
							<p className="nombre">Macbook Pro</p>
							<p className="precio">$250</p>
						</div>
						<div className="acciones">
							<div className="contenedor-cantidad">
								<i className="fas fa-minus"></i>
								<input
									type="text"
									name="cantidad"
								/>
								<i className="fas fa-plus"></i>
							</div>
							<button
								type="button"
								className="btn btn-rojo"
							>
								<i className="fas fa-minus-circle"></i>
								Eliminar Producto
							</button>
						</div>
					</li>
					<li>
						<div className="texto-producto">
							<p className="nombre">Macbook Pro</p>
							<p className="precio">$250</p>
						</div>
						<div className="acciones">
							<div className="contenedor-cantidad">
								<i className="fas fa-minus"></i>
								<input
									type="text"
									name="cantidad"
								/>
								<i className="fas fa-plus"></i>
							</div>
							<button
								type="button"
								className="btn btn-rojo"
							>
								<i className="fas fa-minus-circle"></i>
								Eliminar Producto
							</button>
						</div>
					</li>
					<li>
						<div className="texto-producto">
							<p className="nombre">Macbook Pro</p>
							<p className="precio">$250</p>
						</div>
						<div className="acciones">
							<div className="contenedor-cantidad">
								<i className="fas fa-minus"></i>
								<input
									type="text"
									name="cantidad"
								/>
								<i className="fas fa-plus"></i>
							</div>
							<button
								type="button"
								className="btn btn-rojo"
							>
								<i className="fas fa-minus-circle"></i>
								Eliminar Producto
							</button>
						</div>
					</li>
				</ul>
				<div className="campo">
					<label>Total:</label>
					<input
						type="number"
						name="precio"
						placeholder="Precio"
						readOnly="readonly"
					/>
				</div>
				<div className="enviar">
					<input
						type="submit"
						className="btn btn-azul"
						value="Agregar Pedido"
					/>
				</div>
			</form>
		</>
	);
};
export default NewOrder;
