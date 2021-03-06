import React from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function onSumit() {
    let index = Math.floor(Math.random() * 100);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: allMemes[index].url,
    }));
  }

  function onTextChange(e) {
    const { name, value } = e.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        setAllMemes(res.data.memes);
      });
  }, []);

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
