import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios_instance from '../utils/axios_instance';
import SearchProductForm from '../components/SearchProductForm';
import Swal from 'sweetalert2';
import AmountProductsFrom from '../components/AmountProductsFrom';

const NewOrder = () => {
	/* ----- State ----- */
	const [client, setClient] = useState({});
	const [search, setSearch] = useState('');
	const [products_list, setProductsList] = useState([]);

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

	/**
	 * Filter products by input search.
	 *
	 * @param {Object} event
	 */
	const searchProduct = async (event) => {
		event.preventDefault();

		const search_result = await axios_instance.post(
			`/productos/busqueda/${search}`
		);

		if (search_result.data[0]) {
			console.log(search_result);

			let product = search_result.data[0];

			product.product_id = search_result.data[0]._id;
			product.amount = 0;

			setProductsList([...products_list, product]);
		} else {
			Swal.fire({
				type: 'error',
				title: 'Sin resultados',
				text: 'No hay resultados para la búsqueda realizada.',
			});
		}
	};

	/**
	 * Read input and save into state.
	 * @param {Object} event
	 */
	const readSearchInput = (event) => {
		setSearch(event.target.value);
	};

	return (
		<>
			<h2>Nuevo Pedido</h2>

			<div className="ficha-cliente">
				<h3>Datos de Cliente</h3>
				<p>{`Nombre: ${client.name} ${client.last_name}`}</p>
				<p>{`Teléfono: ${client.phone}`}</p>
			</div>

			<SearchProductForm
				searchProduct={searchProduct}
				readSearchInput={readSearchInput}
			/>

			<ul className="resumen">
				{products_list.map((item, index) => {
					return <AmountProductsFrom key={index} />;
				})}
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
		</>
	);
};
export default NewOrder;
