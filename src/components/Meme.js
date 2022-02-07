export default function Meme() {
  return (
    <main>
      <form className="form">
        <div className="form--input">
          <input type="text" name="top" placeholder="top text" className="" />
          <input type="text" name="bottom" placeholder="bottom text" />
        </div>
        <div className="form--submit">
          <input type="submit" name="submit" value="Get a new meme image 🖼" />
        </div>
      </form>
    </main>
  );
}
