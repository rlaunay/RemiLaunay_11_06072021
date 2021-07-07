import React from 'react'

import { ReactComponent as Logo } from './../../../assets/svg/logo.svg'

import classes from './Footer.module.scss'

class Footer extends React.Component {
	render() {
		return (
			<footer className={classes.footer}>
				<Logo />
				<p>© 2020 Kasa. All rights reserved</p>
			</footer>
		)
	}
}

export default Footer
