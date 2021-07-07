import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Nav.module.scss'

class Nav extends React.Component {
	render() {
		return (
			<nav className={classes.nav}>
				<NavLink
					exact
					activeClassName={classes.active}
					className={classes.link}
					to='/'
				>
					Accueil
				</NavLink>
				<NavLink
					activeClassName={classes.active}
					className={classes.link}
					to='/about'
				>
					A Propos
				</NavLink>
			</nav>
		)
	}
}

export default Nav
