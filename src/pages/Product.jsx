import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    /**
     * 
     * @param {string} id 
     */
    const deleteProduct = (id) => {
        console.log(`Eliminando ${id}`);
    };

    return (
		<li className="producto">
			<div className="info-producto">
				<p className="nombre">{product.name}</p>
				<p className="precio">${product.price}</p>

				{product.image ? (
					<img src={`http://localhost:5000/${product.image}`} alt={product.name} />
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
					Eliminar Cliente
				</button>
			</div>
		</li>
	);
};
export default Product;
