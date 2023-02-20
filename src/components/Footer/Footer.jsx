import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/footer/LOGO.png";

function Footer() {
    return(
        <footer>
            <div className="Footer">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;