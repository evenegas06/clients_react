import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import axios_instance from '../utils/axios_instance';

const NewProductForm = () => {
	/* ----- State ----- */
	const [product, setProduct] = useState({
		name: '',
		price: 0,
	});
	const [image, setImage] = useState(null);

	/* ----- Hooks ----- */
	const navigate = useNavigate();

	/**
	 * Add new product into DB by API.
	 *
	 * @param {Object} event
	 */
	const addProduct = async (event) => {
		event.preventDefault();

		// Create formData
		const form_data = new FormData();

		form_data.append('name', product.name);
		form_data.append('price', product.price);
		form_data.append('image', image);

		try {
			const response = await axios_instance.post('/productos', form_data, {
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

	return (
		<>
			<h2>Nuevo Producto</h2>

			<form onSubmit={addProduct}>
				<legend>Llena todos los campos</legend>

				<div className="campo">
					<label>Nombre:</label>
					<input
						type="text"
						placeholder="Nombre Producto"
						name="name"
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
						onChange={handleInputChange}
					/>
				</div>

				<div className="campo">
					<label>Imagen:</label>
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
export default NewProductForm;
