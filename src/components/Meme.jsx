import { useState } from "react"
import memesData from "../memesData"

export default function MemeForm() {
  const [memeData, setMemeData] = useState({
    topText: "I think",
    bottomText: "I'll buy a boat",
    url: "https://i.imgflip.com/tau4.jpg",
    alt: "I Should Buy A Boat Cat",
  })

  const [allMemeData, setAllMemeData] = useState(memesData)

  console.log(memeData)

  function handleGetMemeImage() {
    const { memes } = memesData.data
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
    const randomMemeImageURL = randomMeme.url
    const randomMemeAlt = randomMeme.name
    setMemeData((prevMemeData) => {
      return {
        ...prevMemeData,
        url: randomMemeImageURL,
        alt: randomMemeAlt,
      }
    })
  }

  // set up a new event handler for the text

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
      <h2>{memeData.topText}</h2>
      <img
        src={memeData.url}
        alt={memeData.alt}
      />
      <h2>{memeData.bottomText}</h2>
    </main>
  )
}
