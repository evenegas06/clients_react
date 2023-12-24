import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios_instance from '../utils/axios_instance';
import Product from './Product';

const Products = () => {
	/* ----- State ----- */
	const [products, setProducts] = useState([]);

	/* ----- Hooks ----- */
	useEffect(() => {
		const getProducts = async () => {
			const products = await axios_instance.get('/productos');
			setProducts(products.data);
		};

		getProducts();
	}, []);

	return (
		<>
			<h2>Products</h2>
			<Link
				to={'/producto/nuevo'}
				className="btn btn-verde nvo-cliente"
			>
				{' '}
				<i className="fas fa-plus-circle"></i>
				Nuevo Producto
			</Link>

			<ul className="listado-productos">
				{products.map((item) => {
					return (
						<Product
							key={item._id}
							product={item}
						/>
					);
				})}
			</ul>
		</>
	);
};
export default Products;
