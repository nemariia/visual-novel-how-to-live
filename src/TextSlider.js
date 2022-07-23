import React from 'react';
import Switch from './Switch.js';
import './styles/textslider.css';

class TextSlider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
			<Switch direction="previous"/>
			<Switch direction="next"/>
			</section>
		)
	}
}

export default TextSlider;