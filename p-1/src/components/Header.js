import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="logo" />
        <span>ReactFacts</span>
      </h1>
      <p>React Course - Project 1</p>
    </header>
  );
};

export default Header;
