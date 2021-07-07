import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout