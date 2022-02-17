import './App.css';
import { Header, Hero } from './components';
import Card from './components/Card';
import { cards } from './components/cardsData';

function App() {
  console.log(cards);
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.key} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
