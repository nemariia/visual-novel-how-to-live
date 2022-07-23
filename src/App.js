import './App.css';
import Title from './Title.js';
import Button from './Button.js';

function App() {
  return (
    <main className="App">
      <Title />
      <Button text="играть" />
      <Button text="авторы" />
      <Button text="музыка" />
    </main>
  );
}

export default App;
