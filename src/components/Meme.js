import React from "react";
import MemesData from "../memesData";

export default function Meme() {
  const [memeImg, setMemeImg] = React.useState("");

  function onSumit() {
    let index = Math.floor(Math.random() * 100);
    setMemeImg(MemesData.data.memes[index].url);
  }

  return (
    <main>
      <div className="form">
        <div className="form--input">
          <input type="text" name="top" placeholder="top text" className="" />
          <input type="text" name="bottom" placeholder="bottom text" />
        </div>
        <div className="form--submit">
          <input
            onClick={onSumit}
            type="button"
            name="submit"
            value="Get a new meme image 🖼"
          />
        </div>
        <div>{!!memeImg && <img className="meme--image" src={memeImg} />}</div>
      </div>
    </main>
  );
}
