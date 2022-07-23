import React from 'react';
import data from './text.json';
import TextSlider from './TextSlider.js';

class Scene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {scene: "", text: [], count: 0}
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

	render() {
		return (
			<section className={this.state.scene}>
				<TextSlider />
			</section>
		)
	}
}

export default Scene;