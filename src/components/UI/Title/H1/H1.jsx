import React from 'react'

import classes from './H1.module.scss'

class H1 extends React.Component {
    render() {
        const classNames = this.props.center ? `${classes.h1} ${classes.center}` : classes.h1
        return <h1 className={classNames}>{this.props.children}</h1>
    }
}

export default H1