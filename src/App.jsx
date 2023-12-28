import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';

import Clients from './pages/Clients';
import NewClientForm from './pages/NewClientForm';
import EditClient from './pages/EditClient';

import Products from './pages/Products';
import NewProductForm from './pages/NewProductForm';
import EditProduct from './pages/EditProduct';

import Orders from './pages/Orders';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="grid contenedor contenido-principal">
				<Sidebar />

				<main className="caja-contenido col-9">
					<Routes>
						<Route
							path="/"
							element={<Clients />}
						/>
						<Route
							path="/clientes/nuevo"
							element={<NewClientForm />}
						/>
						<Route
							path="clientes/editar/:client_id"
							element={<EditClient />}
						/>
						<Route
							path="/productos"
							element={<Products />}
						/>
						<Route
							path="/productos/nuevo"
							element={<NewProductForm />}
						/>
						<Route
							path="/productos/editar/:product_id"
							element={<EditProduct />}
						/>
						<Route
							path="/pedidos"
							element={<Orders />}
						/>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}
export default App;
