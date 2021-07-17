import React from 'react'

import {ReactComponent as Chevron} from './../../../assets/svg/chevron-down-solid.svg'

import classes from './Dropdown.module.scss'

class Dropdown extends React.Component {
    state = {
        isOpen: false
    }

    toggleHandler = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        const className = this.state.isOpen ? classes.button : `${classes.button} ${classes.out}`
        return (
            <div className={classes.dropdown}>
                <button onClick={this.toggleHandler} className={className}>{this.props.title} <Chevron /></button>
                {this.state.isOpen && <div className={classes.content}>
                    {this.props.children}
                </div>}
            </div>
        )
    }
}

export default Dropdown