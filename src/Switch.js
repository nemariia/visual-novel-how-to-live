import React from 'react';
import './styles/textslider.css';

class Switch extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if(this.props.direction == "previous") {
			console.log("must show previous text");
		}
		else if(this.props.direction == "next") {
			console.log("must show next text");
		}
		else {
			console.log("something unexpected just happened");
		}
	}

	render() {
		return <button
			className={this.props.direction == "next"? "switch switch_next" : "switch"}
			onClick={this.handleClick}></button>;
	}
}

export default Switch;