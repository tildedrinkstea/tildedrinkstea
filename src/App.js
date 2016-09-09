import React  from 'react';
import _ from 'lodash';

import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'

import bild1 from '../img/teacher.jpg'
import bild2 from '../img/naut.png'

const App = React.createClass({
	displayName: 'App',
	getInitialState() {
		return {
			numberOfCards: 0,
			cards: {},
			images: [],
			flipped: [],
		}
	} ,
	
handleStartNewGame() {
	const numberOfCards = 4
	let images = [{
			id: 1,
			src: bild1,
			alt: 'bild på en sloth som ser ut som en lärare',
		},
		{
			id: 2,
			src: bild2,
			alt: 'bild på en sloth som ser ut som en astronaut',
		},
		]
		images= _.shuffle(_.concat([], images, images))
		let cards= {}
		for (let i = 0; i < numberOfCards; i++) {
		cards[i]={
			id: i,
			image: images[i],
			isFlipped: false,
			}
		}
		this.setState({
			numberOfCards: numberOfCards,
			cards: cards,
			images: images,
		})
		console.log('NumberOfCards: ', numberOfCards)
		console.log('cards: ', cards)
		console.log('images: ', images)
},

flipCard(cardID) {
	console.log('Klickade på kort:', cardID);
	let flippedCards=_.cloneDeep(this.state.cards)
	flippedCards[cardID].isFlipped=true
	
	let flipped=_.cloneDeep(this.state.flipped)
	
	if (!_.isEqual(flipped[0], flippedCards[cardID])) {
		flipped.push(flippedCards[cardID])
	
	}
	
	this.setState({
		cards: flippedCards,
		flipped: flipped,
	}, () => {
		if (flipped.length === 2) {
			_.delay(this.compareCards, 700, flipped, flippedCards)
		}
	} )
},

compareCards(flipped, cards) {
	const cardOne = flipped[0]
	const cardTwo = flipped[1]
	if (cardOne.image.id === cardTwo.image.id) {
		delete cards[cardOne.id]
		delete cards[cardTwo.id]
	} else {
		cards[cardOne.id].isFlipped = false
		cards[cardTwo.id].isFlipped = false
	}
	this.setState({
		cards: cards,
		flipped: [],
	})
	if(numberOfCards = 0) {
		alert("Du vann!");
		console.log('du vann')
	}
},

  render() {
    return (
		<div className="App">
		<Header />
		<Content 
			cards={this.state.cards}
			flipCard={this.flipCard}
			numberOfCards={this.state.numberOfCards}
		/>
		<Footer 
		handleStartNewGame={this.handleStartNewGame} 
		/>
      </div>
    );
  }
})

export default App;
