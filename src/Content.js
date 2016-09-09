import React from 'react';
import _ from 'lodash';

import './Content.css';
import Card from './Card.js';

const Content = React.createClass({
	displayName: 'Content',
	
	propTypes: {
		cards: React.PropTypes.object,
		numberOfCards: React.PropTypes.number,
		flipCard: React.PropTypes.func,
	},
	
	getCard(card) {
		return (
		<Card 
			key={card.id}
			id={card.id}
			image={card.image}
			alt={card.alt}
			isFlipped={card.isFlipped}
			flipCard={this.props.flipCard}
		/>
		)
	},
	
	renderCards() {
		const cards=_.map(this.props.cards, this.getCard)
		return cards
	},
	
	render() {
		return (
		<div className="Content">
		{this.renderCards()}
		</div>
		);
	}
})

export default Content;