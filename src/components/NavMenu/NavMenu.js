import React from 'react';
import NavItem from '../NavItem/NavItem';
import './NavMenu.css';

const NavMenu = () => {
	return (
		<div className="nav-container">
			<NavItem title='HOME' link='' />
			<NavItem title='REGISTER' link='register' />
			<NavItem title='CHANGE PASS' link='change-password' />
			<NavItem title='DOWNLOAD' link='download' />
			<NavItem title='SHOP' link='shop' />
			<NavItem title='PVP 2v2' link='pvp' />
		</div>
	)
}

export default NavMenu
