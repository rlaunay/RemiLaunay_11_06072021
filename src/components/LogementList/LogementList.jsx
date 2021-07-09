import React from 'react'

import LogementItem from "./LogementItem/LogementItem";

import classes from './LogementList.module.scss'

class LogementList extends React.Component {
    render() {
        let logements = this.props.lodgments.map(lod => (
            <LogementItem key={lod.id} id={lod.id} title={lod.title} cover={lod.cover}/>
        ))

        if (logements.length === 0) {
            logements = <h3>Aucun logements trouvé !</h3>
        }

        if (this.props.error) {
            logements = <h3>Une erreur est survenue</h3>
        }

        return (
            <section className={classes.grid}>
                {logements}
            </section>
        )
    }
}

export default LogementList