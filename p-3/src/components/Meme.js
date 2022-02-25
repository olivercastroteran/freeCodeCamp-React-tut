import { useState } from 'react';
import { memesData } from './memesData';

const Meme = () => {
  const [allMemeImgs] = useState(memesData);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    imgUrl: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...meme,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const memesArr = allMemeImgs.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        imgUrl: memesArr[randomNum].url,
      };
    });
    console.log(meme);
  };

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--btn">Get a new meme image 🪟</button>
      </form>
      <div className="img-container">
        {meme.imgUrl && (
          <img src={meme.imgUrl} alt="meme img" className="form--img" />
        )}
        {meme.topText && <h2 className="meme-txt top">{meme.topText}</h2>}
        {meme.bottomText && (
          <h2 className="meme-txt bottom">{meme.bottomText}</h2>
        )}
      </div>
    </main>
  );
};

export default Meme;
