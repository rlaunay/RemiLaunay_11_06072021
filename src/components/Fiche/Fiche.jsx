import React from 'react'
import {Redirect} from "react-router-dom";
import H2 from "../UI/Title/H2/H2";
import Dropdown from "../UI/Dropdown/Dropdown";
import Tags from './Tags/Tags'
import Caroussel from "./Caroussel/Caroussel";

import classes from './Fiche.module.scss'
import Host from "./Host/Host";
import Rating from "./Rating/Rating";

class Fiche extends React.Component {
    render() {
        const logement = this.props.logement
        if (logement === undefined) return <Redirect to='/not-found' />
        console.log(logement)
        return (
            <React.Fragment>
                <Caroussel images={logement.pictures} />
                <div className={classes.row1}>
                    <div className={classes.col}>
                        <H2>{logement.title}</H2>
                        <span className={classes.location}>{logement.location}</span>
                        <Tags tags={logement.tags} />
                    </div>
                    <div className={`${classes.col} ${classes.host_rate}`}>
                        <Host host={logement.host} />
                        <Rating rating={+logement.rating} />
                    </div>
                </div>
                <div className={classes.row2}>
                    <Dropdown title="Description">{logement.description}</Dropdown>
                    <Dropdown title="Équipements">{logement.equipments}</Dropdown>
                </div>
            </React.Fragment>
        )
    }
}

export default Fiche