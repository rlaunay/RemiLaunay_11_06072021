import React from 'react'

import classes from './H2.module.scss'

class H2 extends React.Component {
    render() {
        const classNames = this.props.center ? `${classes.h2} ${classes.center}` : classes.h2
        return <h2 className={classNames}>{this.props.children}</h2>
    }
}

export default H2