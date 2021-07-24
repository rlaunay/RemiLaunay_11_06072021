import React from 'react'

import classes from './Tag.module.scss'

class Tag extends React.Component {
    render() {
        return (
            <li className={classes.tag}>{this.props.children}</li>
        )
    }
}

export default Tag