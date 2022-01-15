import React from 'react';
import NavItem from '../NavItem/NavItem';
import './NavMenu.css';

const NavMenu = () => {
	return (
		<div className="nav-container">
			<NavItem title='HOME' link='' />
			<NavItem title='REGISTER' link='register' />
			<NavItem title='DOWNLOAD' link='download' />
			<NavItem title='SHOP' link='shop' />
		</div>
	)
}

export default NavMenu
