import React from 'react'

import LogementItem from "./LogementItem/LogementItem";

import classes from './LogementList.module.scss'

class LogementList extends React.Component {
    render() {
        return (
            <section className={classes.grid}>
                {this.props.lodgments.map(lod => (
                    <LogementItem key={lod.id} id={lod.id} title={lod.title} cover={lod.cover}/>
                ))}
            </section>
        )
    }
}

export default LogementList