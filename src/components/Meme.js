import React from "react";
import MemesData from "../memesData";

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState(
    MemesData.data.memes
  );
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function onSumit() {
    let index = Math.floor(Math.random() * 100);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: allMemeImages[index].url,
    }));
  }

  function onTextChange(e) {
    const { name, value } = e.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <main>
      <div className="form">
        <div className="form--input">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            className=""
            onChange={onTextChange}
            value={meme.topText}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            onChange={onTextChange}
            value={meme.bottomText}
          />
        </div>
        <div className="form--submit">
          <input
            onClick={onSumit}
            type="button"
            name="submit"
            value="Get a new meme image 🖼"
          />
        </div>
        <div className="meme">
          <img className="meme--image" src={meme.randomImage} />
          <div className="meme--text top">{meme.topText}</div>
          <div className="meme--text bottom">{meme.bottomText}</div>
        </div>
      </div>
    </main>
  );
}
