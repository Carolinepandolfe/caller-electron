import React from 'react';
import Logo from '../../assets/spmaisw.png';
import Slogan from '../../assets/futuw.png';
import './Footer.css';
const Footer = ( ()=> {
    return (
        <React.Fragment>
            <footer className="footer">
                <img className="footer__img" src={Logo} alt="Logo Hospital São Paulo"/>
                <img className="footer__slogan" src={Slogan} alt="Slogan Futuro Que Conecta"/>
            </footer>
        </React.Fragment>
    );
});

export default Footer;
