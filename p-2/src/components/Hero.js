import { gridImg } from '../assets/images';

const Hero = () => {
  return (
    <section className="main">
      <div className="container">
        <img src={gridImg} alt="grid img" />
      </div>
      <div className="txt">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
