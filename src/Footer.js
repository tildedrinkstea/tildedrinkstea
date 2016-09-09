import React from 'react';

import './Footer.css';
import Newgame from './Newgame.js';

const Footer = React.createClass({
	displayName: 'Footer',
	
	propTypes: {
	handleStartNewGame: React.PropTypes.func,
	},
	
	render() {
		return (
		<div className="Footer">
		<Newgame handleStartNewGame={this.props.handleStartNewGame}/>
		
		</div>
		)
	}
})

export default Footer;