import React from "react";
import "./Fiche.css";
import { useParams, Navigate } from 'react-router-dom';
import data from "../../datas/data.json";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import redstar from "../../assets/fiche/redstar.png";
import greystar from "../../assets/fiche/greystar.png";
import Dropdown from "../../components/Dropdown/Dropdown";

function Fiche() {

    const id = useParams();
    const ficheLogement = data.find(logement => logement.id === id.id);


    const tagslogement = ficheLogement?.tags.map((tags, index) => {
        return <Tag key={index} name={tags} />
    });


    let notes = [];
    let filledstar = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(ficheLogement?.rating)) {
            filledstar = false;
        }
        if(filledstar === true) {
            notes.push(<img key={index} className="star" src={redstar} alt="note"/>)
        } else {
            notes.push(<img key={index} className="star" src={greystar} alt="note"/>)
        }
    }


    const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return(
        <React.Fragment>
            {
                ficheLogement ? (
                    <div className="Fiche">
                        <Carousel images={ficheLogement?.pictures}/>
                        <div className="head">
                            <div className="head-infos">
                                <span className="head-infos-title">{ficheLogement?.title}</span>
                                <span className="head-infos-loc">{ficheLogement?.location}</span>
                                <div className="tags">
                                    {tagslogement}
                                </div>
                            </div>
                            <div className="profil">
                                <div className="profil-infos">
                                    <span className="profil-infos-name">{ficheLogement?.host.name}</span>
                                    <img className="profil-infos-pic" src={ficheLogement?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {notes}
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-fiche">
                            <Dropdown title="Description" content={ficheLogement?.description}/>
                            <Dropdown title="Équipements" content={equipementsLogement}/>
                        </div>
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </React.Fragment>
    )
}

export default Fiche;