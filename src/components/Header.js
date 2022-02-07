import img from "../img/meme.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header--image" src={img} />
      <h1 className="header--title">Meme Generator</h1>
      <h3 className="header--project">Project with hooks</h3>
    </header>
  );
}
