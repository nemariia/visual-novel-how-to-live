import React from 'react';
import Title from './Title.js';
import Button from './Button.js';
import './styles/startscreen.css';

class StartScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="menu">
                <Title />
                <Button text="играть" onClick={this.props.play}/>
                <Button text="авторы" />
                <Button text="музыка" />
            </section>
        )
    }
}

export default StartScreen;