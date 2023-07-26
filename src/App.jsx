import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";

function App() {
    return (
        <>
            <Header />
            <div className="grid contenedor contenido-principal">
                <Sidebar />

                <main className="caja-contenido col-9">
                    {/* TODO: Routing */}
                </main>
            </div>
        </>
    );
}

export default App;