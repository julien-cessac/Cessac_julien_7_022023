import React from "react";
import "./Banner.css";

function Banner ({image, texte}) {
    return(
        <section className="Banner">
            <img className="Banner-Home-Img" src={image} alt="Bannière"/>
            <div className="Banner-Overlay"></div>
            <h1 className="Banner-Home-Txt">{texte}</h1>
        </section>
    );
}

export default Banner;