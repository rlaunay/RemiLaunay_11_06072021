import React from "react";

import classes from './Hero.module.scss'

class Hero extends React.Component{
    render() {
        return (
            <section className={classes.hero}>
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
        )
    }
}

export default Hero