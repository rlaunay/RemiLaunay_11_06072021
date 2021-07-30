import React from "react";

import {ReactComponent as StarFull} from "./../../../assets/svg/stars-full.svg";
import {ReactComponent as StarEmpty} from "./../../../assets/svg/stars-empty.svg";

import classes from './Rating.module.scss'

class Rating extends React.Component {
    render() {
        const stars = []
        for(let i = 1; i <= 5; i++) {
            if (i < this.props.rating) {
                stars.push(<StarFull />)
            } else {
                stars.push(<StarEmpty />)
            }
        }

        return (
            <div className={classes.rating}>
                {stars}
            </div>
        );
    }
}

export default Rating