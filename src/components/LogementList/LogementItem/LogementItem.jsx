import React from 'react'
import {NavLink} from "react-router-dom";

import classes from './LogementItem.module.scss'

class LogementItem extends React.Component {
    render() {
        return (
            <article className={classes.card}>
                <NavLink className={classes.link} to={`logement/${this.props.id}`} />
                <img src={this.props.cover} alt={this.props.title}/>
                <h1>{this.props.title}</h1>
            </article>
        )
    }
}

export default LogementItem
