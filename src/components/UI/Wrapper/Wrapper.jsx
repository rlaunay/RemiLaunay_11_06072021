import React from 'react'

import classes from './Wrapper.module.scss'

class Wrapper extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>{this.props.children}</div>
        )
    }
}

export default Wrapper