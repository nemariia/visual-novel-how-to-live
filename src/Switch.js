import React from 'react';
import './styles/textslider.css';

class Switch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <button className={this.props.direction == "next"? "switch switch_next" : "switch"}></button>;
	}
}

export default Switch;