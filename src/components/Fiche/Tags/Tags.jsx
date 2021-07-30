import React from 'react'
import Tag from "./Tag/Tag";

import classes from './Tags.module.scss'

class Tags extends React.Component {
    render() {
        const tags = this.props.tags
        if (!tags) return <p>Il n'y a pas de tags</p>
        return (
            <ul className={classes.tags}>
                {tags.map(t => <Tag key={t}>{t}</Tag>)}
            </ul>
        )
    }
}

export default Tags