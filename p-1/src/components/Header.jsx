import logo from '../assets/images/logo.png';
import { ToggleBtn } from './';

const Header = ({ isDarkMode, toggleDark }) => {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="logo" />
        <span>ReactFacts</span>
      </h1>
      <p>React Course - Project 1</p>
      <ToggleBtn toggle={toggleDark} isOn={isDarkMode} />
    </header>
  );
};

export default Header;
