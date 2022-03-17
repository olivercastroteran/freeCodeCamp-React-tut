import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tenzies</h1>
      <p>
        Roll until all dices are the same. Click each dice to freeze it at its
        current value between rolls
      </p>
      <div className="dices-container">
        <div className="dice">1</div>
        <div className="dice">2</div>
        <div className="dice">3</div>
        <div className="dice">4</div>
        <div className="dice">5</div>
        <div className="dice">6</div>
        <div className="dice">5</div>
        <div className="dice">4</div>
        <div className="dice">3</div>
        <div className="dice">2</div>
      </div>
      <button className="btn">Roll</button>
    </div>
  );
}

export default App;
