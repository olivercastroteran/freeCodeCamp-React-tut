import { useState } from 'react';
import { memesData } from './memesData';

const Meme = () => {
  const [memeImg, setMemeImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const memesArr = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum].url;
    setMemeImg(url);
  };

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--btn">Get a new meme image 🪟</button>
      </form>
      <div className="img-container">
        {memeImg && <img src={memeImg} alt="meme img" className="form--img" />}
      </div>
    </main>
  );
};

export default Meme;
