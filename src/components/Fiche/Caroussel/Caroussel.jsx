import React from 'react'

import {ReactComponent as Left} from "./../../../assets/svg/chevron-left-solid.svg";
import {ReactComponent as Right} from "./../../../assets/svg/chevron-right-solid.svg";

import classes from './Caroussel.module.scss'

class Caroussel extends React.Component {
    state = {
        index: 0
    }

    rightBtnHandler = () => {
        this.setState(oldState => {
            let newIndex = oldState.index + 1
            if (newIndex === this.props.images.length) {
                newIndex = 0
            }
            return { index: newIndex }
        })
    }

    leftBtnHandler = () => {
        this.setState(oldState => {
            let newIndex = oldState.index - 1
            if (newIndex < 0) {
                newIndex = this.props.images.length - 1
            }
            return { index: newIndex }
        })
    }

    render() {
        return (
            <div className={classes.caroussel}>
                <button
                    type="button"
                    className={`${classes.button} ${classes.left}`}
                    onClick={this.leftBtnHandler}>
                    <Left />
                </button>
                <img
                    src={this.props.images[this.state.index]}
                    alt="caroussel"/>
                <button
                    type="button"
                    className={`${classes.button} ${classes.right}`}
                    onClick={this.rightBtnHandler}>
                    <Right />
                </button>
            </div>
        )
    }
}

export default Caroussel