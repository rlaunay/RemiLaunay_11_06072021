import React from "react";

import classes from './Loader.module.scss'

class Loader extends React.Component {
    render() {
        return (
            <section className={classes.section}>
                <span className={classes.loader} />
            </section>
        )
    }
}

export default Loader