import { useState } from "react"
import memesData from "../memesData"

export default function MemeForm() {
  const [randomMemeData, setRandomMemeData] = useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/tau4.jpg",
    alt: "I Should Buy A Boat Cat",
  })

  const [allMemeData, setAllMemeData] = useState(memesData)

  console.log(randomMemeData)

  function handleGetMemeImage() {
    const { memes } = memesData.data
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
    const randomMemeImageURL = randomMeme.url
    const randomMemeAlt = randomMeme.name
    setRandomMemeData((prevMemeData) => {
      return {
        ...prevMemeData,
        url: randomMemeImageURL,
        alt: randomMemeAlt,
      }
    })
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
        src={randomMemeData.url}
        alt={randomMemeData.alt}
      />
    </main>
  )
}
