import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Swal from 'sweetalert2';

import Spinner from '../components/Spinner';
import axios_instance from '../utils/axios_instance';

const EditProduct = () => {
	/* ----- State ----- */
	const [product, setProduct] = useState({
		name: '',
		price: 0,
		image: '',
	});

	const [image, setImage] = useState('');

	const [is_ready, setIsReady] = useState(false);

	/* ----- Hooks ----- */
	const navigate = useNavigate();
	const { product_id } = useParams();

	useEffect(() => {
		/**
		 *
		 */
		const getProduct = async () => {
			try {
				const data = await axios_instance.get(`/productos/${product_id}`);
				console.log(data);
				setProduct(data.data);
				setIsReady(true);
			} catch (error) {
				console.error(error);
			}
		};

		getProduct();
	}, []);

	/**
	 * Fill *product state* attributes with the input value.
	 *
	 * @param {Object} event
	 */
	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setProduct({
			...product,
			[name]: value,
		});
	};

	/**
	 * Set image into state.
	 *
	 * @param {Object} event
	 */
	const handleFile = (event) => {
		setImage(event.target.files[0]);
	};

	if (!is_ready) {
		return <Spinner />;
	}

	/**
	 * Update product into DB.
	 * 
	 * @param {Object} event
	 */
	const updateProduct = async (event) => {
		event.preventDefault();

		// Create formData
		const form_data = new FormData();

		form_data.append('name', product.name);
		form_data.append('price', product.price);
		form_data.append('image', image);

		try {
			const response = await axios_instance.put(`/productos/${product_id}`, form_data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (response.status == 200) {
				Swal.fire(
					'Producto agregado correctamente',
					response.data.message,
					'success'
				);
			}

			navigate('/productos');
		} catch (error) {
			console.error(error);

			Swal.fire({
				type: 'error',
				title: 'Lo sentimos, hubo un error inesperado.',
				text: 'Vuelva a intentarlo mas tarde.',
			});
		}
	};

	return (
		<>
			<h2>Editar Producto</h2>

			<form onSubmit={updateProduct}>
				<legend>Llena todos los campos</legend>

				<div className="campo">
					<label>Nombre:</label>
					<input
						type="text"
						placeholder="Nombre Producto"
						name="name"
						defaultValue={product.name}
						onChange={handleInputChange}
					/>
				</div>

				<div className="campo">
					<label>Precio:</label>
					<input
						type="number"
						name="price"
						min="0.00"
						step="0.01"
						placeholder="Precio"
						defaultValue={product.price}
						onChange={handleInputChange}
					/>
				</div>

				<div className="campo">
					<label>Imagen:</label>

					{product.image ? (
						<img
							src={`http://localhost:5000/${product.image}`}
							alt={product.name}
							width="300"
						/>
					) : null}

					<input
						type="file"
						name="image"
						onChange={handleFile}
					/>
				</div>

				<div className="enviar">
					<input
						type="submit"
						className="btn btn-azul"
						value="Agregar Producto"
					/>
				</div>
			</form>
		</>
	);
};
export default EditProduct;
