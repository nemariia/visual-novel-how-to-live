import React from 'react';
import data from './text.json';
import TextSlider from './TextSlider.js';
import './styles/scene.css';

class Scene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {scene: "", text: [], characters: [], count: 0};
		this.nextScene = this.nextScene.bind(this);
	}

	componentDidMount() {
		this.setScene();
	}

	componentDidUpdate() {
		this.setCharacters();
	}

	setScene() {
		this.setState((state) => ({
  			scene: data[state.count].scene,
  			text: data[state.count].text,
  			characters: data[state.count].characters
		}));
	}

	setCharacters() {
		if(this.state.characters != undefined) {
			for(let i=0; i<this.state.characters.length; i++) {
				let character = document.createElement("div");
				character.setAttribute("id", `${this.state.characters[i]}`);
				document.querySelector("." + this.state.scene).appendChild(character);
			}
		}
	}

	increaseCount() {
		this.setState((state) => ({
			count: state.count + 1
		}))
	}

	nextScene() {
		this.increaseCount();
		this.setScene();
	}

	promisedSetState = (newState) => new Promise(resolve => this.setState(newState, resolve));

	render() {
		return (
			<section className={`${this.state.scene} scene`}>
				<TextSlider textArray={this.state.text} nextScene={this.nextScene}/>
			</section>
		)
	}
}

export default Scene;