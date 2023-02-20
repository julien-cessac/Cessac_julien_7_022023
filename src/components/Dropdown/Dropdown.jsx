import React, { useState } from "react";
import "./Dropdown.css";
import Vector from "../../assets/Dropdown/Vector.png";

function Dropdown({title, content}) {

    const [open, setOpen] = useState(false);

    return(

        <div className="dropdown">
            <div className="dropdown-box" onClick={() => setOpen(!open)}>
                <h2 className="dropdown-title">{title}</h2>
                <span className={`dropdown-vector ${open}`}>
                    <img src={Vector} alt="expend"/>
                </span>
            </div>
            {
                open && <div className="dropdown-content">{content}</div>
            }
        </div>
    );
}

export default Dropdown;