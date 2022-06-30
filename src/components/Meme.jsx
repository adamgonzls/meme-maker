import memesData from "../memesData";

export default function MemeForm() {
  function handleGetMemeImage(e) {
    const { memes } = memesData.data;
    const selectedImageURL =
      memes[Math.floor(Math.random() * memes.length)].url;
    console.log(selectedImageURL);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Top text"
        className="something"
      />
      <input
        type="text"
        placeholder="Bottom text"
      />
      <button onClick={handleGetMemeImage}>Get a new meme image 🖼</button>
    </div>
  );
}
