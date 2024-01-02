const SearchProductForm = (props) => {
	return (
		<form
            onSubmit={props.searchProduct}
        >
			<legend>Busca un producto y agrega una cantidad</legend>

			<div className="campo">
				<label>Productos:</label>
				<input
					type="text"
					placeholder="Nombre Productos"
					name="products"
                    onChange={props.readSearchInput}
				/>
			</div>

			<input
				type="submit"
				className="btn btn-azul btn-block"
				value="Buscar producto"
			/>
		</form>
	);
};
export default SearchProductForm;
