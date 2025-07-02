import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const Footer = () => (
    <footer className='footerContainer'>
        <Copyright />
        <div>
            <Link to="/returns">Política de Devoluciones</Link>
            <Link to="/contact">Contacto</Link>
        </div>
    </footer>
);

export default Footer;
