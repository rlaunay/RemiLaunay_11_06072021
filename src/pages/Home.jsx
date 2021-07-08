import React from 'react'

import LogementList from '../components/LogementList/LogementList'
import Hero from "../components/Hero/Hero";

import api from '../mocks/api'


class Home extends React.Component {
    state = {
        logements: [],
        error: null
    }

    componentDidMount() {
        api.getAll().then(res => {
            this.setState({ logements: res, error: null })
        }).catch(err => {
            this.setState({ error: err })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Hero />
                <LogementList lodgments={this.state.logements} />
            </React.Fragment>
        )
    }
}

export default Home