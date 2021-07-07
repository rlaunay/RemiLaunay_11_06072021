import React from 'react'

import { ReactComponent as Logo } from './../../../assets/svg/logo.svg'
import Nav from './Nav/Nav'

import classes from './Header.module.scss'

class Header extends React.Component {
	render() {
		return (
			<header className={classes.header}>
				<Logo />
				<Nav />
			</header>
		)
	}
}

export default Header
