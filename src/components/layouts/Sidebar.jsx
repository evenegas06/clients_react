const Sidebar = () => {
    return (
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">
                <a href="index.html" >
                    <i className="fa-solid fa-users-between-lines icon"></i>
                    Clientes
                </a>
                
                <a href="productos.html">
                <i className="fa-solid fa-boxes-stacked icon"></i>
                    Productos
                </a>
                
                <a href="pedidos.html" >
                <i className="fa-solid fa-book icon"></i>
                    Pedidos
                </a>
            </nav>
        </aside>
    );
};
export default Sidebar;