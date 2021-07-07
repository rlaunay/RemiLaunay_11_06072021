import React from 'react'

import LodgmentList from '../components/LodgmentList/LodgmentList'

import api from './../mocks/api'


class Home extends React.Component {
    state = {
        lodgments: [],
        error: null
    }

    componentDidMount() {
        api.getAll().then(res => {
            this.setState({ lodgments: res, error: null })
        }).catch(err => {
            this.setState({ error: err })
        })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <LodgmentList lodgments={this.state.lodgments} />
            </div>
        )
    }
}

export default Home