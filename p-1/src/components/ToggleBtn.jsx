const ToggleBtn = ({ isOn, toggle }) => {
  return (
    <button className={`toggle-btn ${isOn && 'on'}`} onClick={toggle}>
      <div className="circle"></div>
    </button>
  );
};

export default ToggleBtn;
