import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import axios_instance from '../utils/axios_instance';

const Product = ({ product }) => {
	/**
	 * Delete product by API.
	 *
	 * @param {string} id
	 */
	const deleteProduct = (id) => {
		Swal.fire({
			title: '¿Estás seguro?',
			text: 'Un producto eliminado no se puede recuperar.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar',
			cancelButtonText: 'No, cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				axios_instance.delete(`/productos/${id}`).then((response) => {
					if (response.status == 200) {
						Swal.fire({
							title: '¡Eliminado!',
							text: response.data.message,
							icon: 'success',
						});
					}
				});
			}
		});
	};

	return (
		<li className="producto">
			<div className="info-producto">
				<p className="nombre">{product.name}</p>
				<p className="precio">${product.price}</p>

				{product.image ? (
					<img
						src={`http://localhost:5000/${product.image}`}
						alt={product.name}
					/>
				) : null}
			</div>

			<div className="acciones">
				<Link
					to={`/productos/editar/${product._id}`}
					className="btn btn-azul"
				>
					<i className="fas fa-pen-alt"></i>
					Editar Producto
				</Link>

				<button
					type="button"
					className="btn btn-rojo btn-eliminar"
					onClick={() => deleteProduct(product._id)}
				>
					<i className="fas fa-times"></i>
					Eliminar Producto
				</button>
			</div>
		</li>
	);
};
export default Product;
