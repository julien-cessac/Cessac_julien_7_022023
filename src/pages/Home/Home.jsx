import React from "react";
import "./Home.css"
import Banner from "../../components/Banner/Banner";
import HomeBanner from "../../assets/accueil/banner.png";
import data from "../../datas/data.json";
import { Link } from "react-router-dom";
import Thumb from "../../components/Thumb/Thumb";

function Home() {
    return (
        <React.Fragment>
            <Banner image={HomeBanner} texte="Chez vous, partout et ailleurs"/>
            <div className="Thumbs">
                {data.map((logement) => <Link key={logement.id} to={"/logement/"+logement.id+"/#"}>
                                            <Thumb key={logement.id} idLogement={logement.id} image={logement.cover} titre={logement.title} />
                                        </Link>)}
            </div>
        </React.Fragment>
    )
}

export default Home;