export default function MemeForm() {
  function makeMeme(e) {
    e.preventDefault()
    console.log('button was clicked')
  }
  
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <button onClick={makeMeme}>MakeMeme</button>
    </form>
  )
}