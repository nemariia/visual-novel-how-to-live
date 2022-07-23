import React from 'react';
import './App.css';
import StartScreen from './StartScreen';
import Scene from './Scene.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {screen: "startscreen"};
    this.play = this.play.bind(this);
  }

  play() {
    this.setState({screen: "play"});
  }

  render() {
  return (
    <main className="App">
      { this.state.screen === "startscreen" ? <StartScreen play={this.play}/> : <Scene />}
    </main>
    )
  }
}

export default App;
