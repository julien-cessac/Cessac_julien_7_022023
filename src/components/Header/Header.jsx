import React from "react";
import "./Header.css";
import logoNav from "../../assets/header/LOGO.png";
import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();
    return(
        <header>
            <Link to="/">
                <img src={logoNav} alt="Logo" className="Header-Logo"/>
            </Link>
            <nav className="Header-Nav">
                <Link to="/" className={`Header-Home ${location.pathname === "/" && 'active'}`}>Accueil</Link>
                <Link to="/About" className={`Header-About ${location.pathname === "/About" && 'active'}`}>À propos</Link>
            </nav>
        </header>
    );
}

export default Header;