import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">
                <Link to="/" >
                    <i className="fa-solid fa-users-between-lines icon"></i>
                    Clientes
                </Link>

                <Link to="/productos">
                    <i className="fa-solid fa-boxes-stacked icon"></i>
                    Productos
                </Link>

                <Link to="/pedidos" >
                    <i className="fa-solid fa-book icon"></i>
                    Pedidos
                </Link>
            </nav>
        </aside>
    );
};
export default Sidebar;