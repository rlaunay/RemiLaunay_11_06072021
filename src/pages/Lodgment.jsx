import React from 'react'

import { withRouter } from 'react-router-dom'

class Lodgment extends React.Component {
    render() {
        console.log(this.props)
        return (
            <h1>Lodgment {this.props.match.params.id}</h1>
        )
    }
}
export default withRouter(Lodgment)