import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
    return(
        <div className="Error">
            <h1 className="Error-Title">404</h1>
            <span className="Error-Txt">Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/" className="Error-Link">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default Error;