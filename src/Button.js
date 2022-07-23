import React from 'react';
import './styles/button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <button onClick={this.props.onClick} className="menu_button">{this.props.text}</button>;
	}
}

export default Button;