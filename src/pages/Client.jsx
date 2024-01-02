import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import axios_instance from '../utils/axios_instance';

const Client = ({ client }) => {
	/**
	 * Delete client by API REST.
	 *
	 * @param {String} id
	 */
	const deleteClient = (id) => {
		Swal.fire({
			title: '¿Estas seguro de eliminar este cliente?',
			text: 'Un cliente eliminado no se puede recuperar.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, ¡eliminar!',
		}).then((result) => {
			if (result.isConfirmed) {
				axios_instance.delete(`/clientes/${id}`).then((response) => {
					Swal.fire({
						title: '¡Eliminado!',
						text: response.data.message,
						icon: 'success',
					});
				});
			}
		});
	};

	return (
		<li className="cliente">
			<div className="info-cliente">
				<p className="nombre">{`${client.name} ${client.last_name}`}</p>

				<p className="empresa">{client.company}</p>

				<p>{client.email}</p>
				<p>{client.phone}</p>
			</div>

			<div className="acciones">
				<Link
					to={`/clientes/editar/${client._id}`}
					className="btn btn-azul"
				>
					<i className="fas fa-pen-alt icon-btn"></i>
					Editar
				</Link>

				<Link
					to={`/pedidos/nuevo/${client._id}`}
					className="btn btn-amarillo"
				>
					<i className="fas fa-plus icon-btn"></i>
					Nuevo pedido
				</Link>

				<button
					type="button"
					className="btn btn-rojo btn-eliminar"
					onClick={() => deleteClient(client._id)}
				>
					<i className="fas fa-times icon-btn"></i>
					Eliminar
				</button>
			</div>
		</li>
	);
};
export default Client;
