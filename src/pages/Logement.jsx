import React from 'react'

import { withRouter } from 'react-router-dom'

class Logement extends React.Component {
    render() {
        console.log(this.props)
        return (
            <h1>Logement {this.props.match.params.id}</h1>
        )
    }
}
export default withRouter(Logement)