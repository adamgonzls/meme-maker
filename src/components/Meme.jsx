import { useState, useEffect } from "react"

export default function MemeForm() {
  const [memeData, setMemeData] = useState({
    topText: "I think",
    bottomText: "I'll buy a boat",
    url: "https://i.imgflip.com/tau4.jpg",
    alt: "I Should Buy A Boat Cat",
  })

  const [allMemesData, setAllMemesData] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemesData(data.data.memes))
  }, [])

  function handleGetMemeImage() {
    const randomMeme =
      allMemesData[Math.floor(Math.random() * allMemesData.length)]
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

  function handleTextChange(event) {
    const { name, value } = event.target
    setMemeData((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      }
    })
  }

  return (
    <main>
      <div>
        <input
          name="topText"
          type="text"
          placeholder="Top text"
          onChange={handleTextChange}
        />
        <input
          name="bottomText"
          type="text"
          placeholder="Bottom text"
          onChange={handleTextChange}
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
