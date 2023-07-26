import { BrowserRouter, Route, Routes } from "react-router-dom";

import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import NewClientForm from "./pages/NewClientForm";

import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="grid contenedor contenido-principal">
                <Sidebar />

                <main className="caja-contenido col-9">
                    <Routes>
                        <Route path="/" element={<Clients />} />
                        <Route path="/clientes/nuevo" element={<NewClientForm />} />
                        <Route path="/productos" element={<Products />} />
                        <Route path="/pedidos" element={<Orders />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;