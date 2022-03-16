import { useState } from 'react';
import './App.css';
import { Header, List } from './components';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggle = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} toggleDark={toggle} />
      <List isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
