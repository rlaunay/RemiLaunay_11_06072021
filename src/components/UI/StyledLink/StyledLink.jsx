import React from 'react'
import { Link } from 'react-router-dom'

import classes from './StyledLink.module.scss'

class StyledLink extends React.Component {
    render() {
        return <Link to={this.props.to} className={classes.link}>{this.props.children}</Link>
    }
}

export default StyledLink