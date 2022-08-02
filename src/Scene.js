import React from 'react';
import data from './text.json';
import TextSlider from './TextSlider.js';
import './styles/scene.css';

class Scene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {scene: "", text: [], count: 0};
		this.nextScene = this.nextScene.bind(this);
	}

	componentDidMount() {
		this.setScene();
	}

	setScene() {
		this.setState((state) => ({
  			scene: data[state.count].scene,
  			text: data[state.count].text
		}));
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

	render() {
		return (
			<section className={`${this.state.scene} scene`}>
				<TextSlider textArray={this.state.text} nextScene={this.nextScene}/>
			</section>
		)
	}
}

export default Scene;