import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dices, setDices] = useState([]);
  const [tenzies, setTenzies] = useState(false);

  const allNewDices = () => {
    const arr = [];

    for (let i = 0; i < 10; i++) {
      arr.push({
        id: i,
        value: Math.floor(Math.random() * 6) + 1,
        isFrozen: false,
      });
    }

    setDices(arr);
    setTenzies(false);

    return arr;
  };

  useEffect(() => {
    const arr = allNewDices();
    setDices(arr);
  }, []);

  const freezeDice = (dice) => {
    const freezeDice = {
      id: dice.id,
      value: dice.value,
      isFrozen: !dice.isFrozen,
    };

    const newArr = [...dices];
    newArr[dice.id] = freezeDice;

    setDices(newArr);

    if (
      dices[0].value === dices[1].value &&
      dices[0].value === dices[2].value &&
      dices[0].value === dices[3].value &&
      dices[0].value === dices[4].value &&
      dices[0].value === dices[5].value &&
      dices[0].value === dices[6].value &&
      dices[0].value === dices[7].value &&
      dices[0].value === dices[8].value &&
      dices[0].value === dices[9].value
    ) {
      setTenzies(true);
    }
  };

  const getNewDices = () => {
    const arr = dices;
    for (let i = 0; i < 10; i++) {
      if (dices[i].isFrozen) continue;
      arr[i] = {
        id: i,
        value: Math.floor(Math.random() * 6) + 1,
        isFrozen: false,
      };
    }

    setDices([...arr]);
  };

  return (
    <div className="App">
      <h1>Tenzies</h1>
      <p>
        {!tenzies
          ? `Roll until all dices are the same. Click each dice to freeze it at its current value between rolls`
          : 'Congratulations!! You did it'}
      </p>
      <div className="dices-container">
        {dices &&
          dices.map((dice) => (
            <div
              className={`dice ${dice.isFrozen && 'selected'}`}
              key={dice.id}
              onClick={() => freezeDice(dice)}
            >
              {dice.value}
            </div>
          ))}
      </div>
      {!tenzies ? (
        <button className="btn" onClick={() => getNewDices()}>
          Roll
        </button>
      ) : (
        <button className="btn" onClick={allNewDices}>
          Restart
        </button>
      )}
    </div>
  );
}

export default App;
