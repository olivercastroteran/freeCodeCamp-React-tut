import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dices, setDices] = useState([]);
  // const [tenzies, setTenzies] = useState(false);

  const allNewDices = () => {
    const arr = [];

    for (let i = 0; i < 10; i++) {
      arr.push({
        value: Math.floor(Math.random() * 6) + 1,
        isFreeze: false,
      });
    }

    setDices(arr);

    return arr;
  };

  useEffect(() => {
    const arr = allNewDices();
    setDices(arr);
  }, []);

  return (
    <div className="App">
      <h1>Tenzies</h1>
      <p>
        Roll until all dices are the same. Click each dice to freeze it at its
        current value between rolls
      </p>
      <div className="dices-container">
        {dices &&
          dices.map((dice) => (
            <div className="dice" key={Math.random()}>
              {dice.value}
            </div>
          ))}
      </div>
      <button className="btn" onClick={allNewDices}>
        Roll
      </button>
    </div>
  );
}

export default App;
