import React from 'react'

import H1 from '../components/UI/Title/H1/H1'
import H2 from '../components/UI/Title/H2/H2'
import StyledLink from './../components/UI/StyledLink/StyledLink'

class NotFound extends React.Component {
    render() {
        return (
            <React.Fragment>
                <H1>404</H1>
                <H2>Oups! La page que vous demandez n'existe pas.</H2>
                <StyledLink to="/" >Retourner sur la page d’accueil</StyledLink>
            </React.Fragment>
        )
    }
}

export default NotFound