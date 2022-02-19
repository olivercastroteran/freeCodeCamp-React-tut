import trollImg from '../assets/images/troll-face.png';

const Header = () => {
  return (
    <header className="header">
      <img src={trollImg} alt="troll face" />
      <h2 className="header-title">Meme Generator</h2>
      <h3 className="header-subtitle">React Course - Project 3</h3>
    </header>
  );
};

export default Header;
