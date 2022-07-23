import React from 'react';
import Switch from './Switch.js';
import './styles/textslider.css';

class TextSlider extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		if(e.target.classList.contains("switch_next")) {
			console.log("must show next text");
		}
		else if(!e.target.classList.contains("switch_next")) {
			console.log("must show previous text");
		}
		else {
			console.log("something unexpected just happened");
		}
	}

	render() {
		return (
			<section>
				<p className="text"></p>
				<Switch onClick={this.handleClick} direction="previous"/>
				<Switch onClick={this.handleClick} direction="next"/>
			</section>
		)
	}
}

export default TextSlider;