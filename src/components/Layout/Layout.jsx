import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import classes from './Layout.module.scss'

class Layout extends React.Component {
	render() {
		return (
			<div className={classes.layout}>
				<Header />
				<main className={classes.main}>{this.props.children}</main>
				<Footer />
			</div>
		)
	}
}

export default Layout
