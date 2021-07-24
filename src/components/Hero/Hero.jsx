import React from "react";

import classes from './Hero.module.scss'

class Hero extends React.Component{
    render() {
        return (
            <section
                style={{backgroundImage: `url("${this.props.url}")`}}
                className={classes.hero}
            >
                <h1>{this.props.children}</h1>
            </section>
        )
    }
}

export default Hero