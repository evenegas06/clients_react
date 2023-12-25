import { useState } from 'react';

const NewProductForm = () => {
	/* ----- State ----- */
	const [product, setProduct] = useState({
		name: '',
		price: 0,
	});
	const [image, setImage] = useState(null);

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

			<form>
				<legend>Llena todos los campos</legend>

				<div className="campo">
					<label>Nombre:</label>
					<input
						type="text"
						placeholder="Nombre Producto"
						name="nombre"
						onChange={handleInputChange}
					/>
				</div>

				<div className="campo">
					<label>Precio:</label>
					<input
						type="number"
						name="precio"
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
						name="imagen"
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
