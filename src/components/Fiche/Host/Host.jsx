import React from 'react'

import classes from "./Host.module.scss";

class Host extends React.Component {
    render() {
        return (
            <div className={classes.host}>
                <span>{this.props.host.name}</span>
                <img src={this.props.host.picture} alt=""/>
            </div>
        );
    }
}

export default Host