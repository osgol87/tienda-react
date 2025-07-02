import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartCount }) => {

    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = React.useState('');

    // Hook para navegación
    const navigate = useNavigate();

    // Maneja el envío del formulario de búsqueda
    const handleSearch = (e) => {

        e.preventDefault();

        if (searchTerm.trim()) {
            navigate(`/products?search=${searchTerm.trim()}`);
        }
    };

    return (
        <header className='headerContainer'>
            <Link to="/" className='logo'>
                <img src="/logo.png" alt="Speed Sneakers" />
            </Link>
            <nav>
                <form className='searchForm' onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Buscar por nombre, marca, categoría..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                </form>
                <Link to="/products">Todos los Productos</Link>
                <Link to="/cart">
                    🛒 Carrito ({cartCount})
                </Link>
            </nav>
        </header>
    );
};

export default Header;
