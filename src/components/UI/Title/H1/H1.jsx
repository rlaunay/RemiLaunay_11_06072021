import React from 'react'

import classes from './H1.module.scss'

class H1 extends React.Component {
    render() {
        return <h1 className={classes.h1}>{this.props.children}</h1>
    }
}

export default H1