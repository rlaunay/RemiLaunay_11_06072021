import React from 'react'
import {Redirect} from "react-router-dom";
import H2 from "../UI/Title/H2/H2";
import Row from "../UI/Row/Row";
import Dropdown from "../UI/Dropdown/Dropdown";
import Tags from './Tags/Tags'

class Fiche extends React.Component {
    render() {
        const logement = this.props.logement
        if (logement === undefined) return <Redirect to='/not-found' />
        console.log(logement)
        return (
            <React.Fragment>
                <Row>
                    <div>
                        <H2>{logement.title}</H2>
                        <span>{logement.location}</span>
                        <Tags tags={logement.tags} />
                    </div>
                    <div></div>
                </Row>
                <Row>
                    <Dropdown title="Description">{logement.description}</Dropdown>
                    <Dropdown title="Équipements">{logement.equipments}</Dropdown>
                </Row>
            </React.Fragment>
        )
    }
}

export default Fiche