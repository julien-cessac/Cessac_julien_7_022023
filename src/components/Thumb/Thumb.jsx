import React from "react";
import "./Thumb.css";

function Thumb ({id, image, titre}) {
    return(
        <div className="Thumb" id={id}>
            <img className="Thumb-Img" src={image} alt="Thumb"/>
            <div className="Thumb-Overlay"></div>
            <span className="Thumb-Txt">{titre}</span>
        </div>
    );
}

export default Thumb;