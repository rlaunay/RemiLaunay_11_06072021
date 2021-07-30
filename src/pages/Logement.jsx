import React from 'react'

import Fiche from './../components/Fiche/Fiche'
import Loader from "../components/UI/Loader/Loader";

import { withRouter } from 'react-router-dom'
import api from "../mocks/api";

class Logement extends React.Component {
    state = {
        logement: null,
        error: null,
        isLoading: true
    }

    componentDidMount() {
        api.getOne(this.props.match.params.id).then(res => {
            this.setState({ logement: res, error: null, isLoading: false })
        }).catch(err => {
            this.setState({ error: err, isLoading: false })
        })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.isLoading && <Fiche error={this.state.error} logement={this.state.logement}/>}
                {this.state.isLoading && <Loader />}
            </React.Fragment>
        )
    }
}
export default withRouter(Logement)