import { useState } from "react"
import memesData from "../memesData"

export default function MemeForm() {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/tau4.jpg")
  const [memeImageAlt, setMemeImageAlt] = useState("I Should Buy A Boat Cat")

  function handleGetMemeImage(e) {
    const { memes } = memesData.data
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
    const randomMemeImageURL = randomMeme.url
    const randomMemeAlt = randomMeme.name
    setMemeImage(randomMemeImageURL)
    setMemeImageAlt(randomMemeAlt)
  }

  return (
    <main>
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
      <img
        src={memeImage}
        alt={memeImageAlt}
      />
    </main>
  )
}
