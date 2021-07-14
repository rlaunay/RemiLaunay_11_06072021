import React from 'react'

import classes from './H2.module.scss'

class H2 extends React.Component {
    render() {
        return <h2 className={classes.h2}>{this.props.children}</h2>
    }
}

export default H2