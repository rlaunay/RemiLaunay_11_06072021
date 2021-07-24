import React from 'react'

import classes from './Row.module.scss'

class Row extends React.Component {
    render() {
        return (
            <div className={classes.grid}>
                {this.props.children}
            </div>
        )
    }
}

export default Row