import React, { useState } from "react";
import "./Carousel.css";
import arrow from "../../assets/fiche/arrow.png";

function Carousel({images}) {

    const [current, setImg] = useState(0);
    const imagesNumber = images.length;

    const Previous = () => {
        if(current === 0) {
            setImg(imagesNumber -1);
        } else {
            setImg(current -1);
        }
        return(setImg);
    };  

    const Next = () => {
        if(current === imagesNumber -1) {
            setImg(0);
        } else {
            setImg(current +1);
        }
        return(setImg);
    };

    return(
        <div className="carousel">
            {
                imagesNumber > 1 && <img className="arrow left-arrow" src={arrow} alt="previous" onClick={Previous}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === current ? 'carousel-img actif' : 'carousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
                <div className="sliderPosition">{current+1}/{imagesNumber}</div>
            {
                imagesNumber > 1 && <img className="arrow right-arrow" src={arrow} alt="next" onClick={Next}/>
            }
        </div>
    );
}

export default Carousel;