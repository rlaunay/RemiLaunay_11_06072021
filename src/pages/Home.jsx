import React from 'react'

import LogementList from '../components/LogementList/LogementList'
import Hero from "../components/Hero/Hero";
import Loader from "../components/UI/Loader/Loader";

import imgUrl from './../assets/img/hero_background.png'
import api from '../mocks/api'


class Home extends React.Component {
    state = {
        logements: [],
        error: null,
        isLoading: true
    }

    componentDidMount() {
        api.getAll().then(res => {
            this.setState({ logements: res, error: null, isLoading: false })
        }).catch(err => {
            this.setState({ error: err, isLoading: false })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Hero url={imgUrl}>Chez vous, partout et ailleurs</Hero>
                {!this.state.isLoading && <LogementList error={this.state.error} lodgments={this.state.logements}/>}
                {this.state.isLoading && <Loader />}
            </React.Fragment>
        )
    }
}

export default Home