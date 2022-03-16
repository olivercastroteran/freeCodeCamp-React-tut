import logo from '../assets/images/logo.png';

const List = ({ isDarkMode }) => {
  return (
    <div className={`main ${!isDarkMode && 'off'}`}>
      <h2>Fun facts about React</h2>
      <ul>
        <li>
          <div className="dot"></div>
          Was firs release in 2013
        </li>
        <li>
          <div className="dot"></div>
          Was originally created by Jordan Walke
        </li>
        <li>
          <div className="dot"></div>
          Has well over 100k stars on GitHub
        </li>
        <li>
          <div className="dot"></div>
          Is maintained by Facebook
        </li>
        <li>
          <div className="dot"></div>
          Powers thousands of enterprise apps, includiong mobile apps
        </li>
      </ul>
      <img className="logo-back" src={logo} alt="react logo" />
    </div>
  );
};

export default List;
