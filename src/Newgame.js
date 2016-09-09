import React from 'react';

import './Newgame.css';

const Newgame = React.createClass({
	displayName: 'Newgame',
	
	propTypes:{
		handleStartNewGame: React.PropTypes.func,
	},
	
	render() {
		return (
		<div className="Newgame">
		<button onClick={this.props.handleStartNewGame}>
		Nytt spel!
		</button>
		</div>
		)
	}
})

export default Newgame;