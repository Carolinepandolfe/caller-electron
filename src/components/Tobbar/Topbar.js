import React from 'react';
import Logo from '../../assets/sp_mais.png';
import './Topbar.css';

const Topbar = ( ()=> {
    return (
        <React.Fragment>
            <header className="header">
                <img className="header__img" src={Logo} alt="Logo Hospital São Paulo"/>
            </header>
        </React.Fragment>
    );
});

export default Topbar;