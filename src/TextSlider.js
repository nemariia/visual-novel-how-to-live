import React from 'react';
import Switch from './Switch.js';
import Button from './Button.js';
import './styles/textslider.css';

class TextSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: "", count: -1};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		if(e.target.classList.contains("switch_next")) {
			console.log("must show next text");
			if(this.props.textArray.length > this.state.count + 1){
				this.setState((state, props) => ({
  				text: props.textArray[state.count + 1],
  				count: state.count + 1
			}));
			}
		}
		else if(!e.target.classList.contains("switch_next")) {
			console.log("must show previous text");
			if(-1 < this.state.count - 1){
				this.setState((state, props) => ({
  					text: props.textArray[state.count - 1],
  					count: state.count - 1
				}));
			}
		}
		else {
			console.log("something unexpected just happened");
		}
	}

	render() {
		return (
			<section>
				<p className="text">{ this.state.text }</p>
				<section>
					<Switch onClick={this.handleClick} direction="previous"/>
					<Switch onClick={this.handleClick} direction="next"/>
					<Button text="дальше" />
				</section>
			</section>
		)
	}
}

export default TextSlider;