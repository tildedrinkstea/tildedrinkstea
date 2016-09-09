import React from 'react';

import './Header.css';

const Header = React.createClass({
	displayName: 'Header',
	
	render() {
		return (
		<div className="Header">
		<h2>Matcha bilderna!</h2>
		</div>
		)
	}
})

export default Header;