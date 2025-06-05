import trollFace from '../images/Troll Face.png'

export default function Header() {
  return (
      <header className="header">
          <img 
              src={trollFace}
              className="header--image"
          />
          <h2 className="header--title">Meme Generator</h2>
          <h4 className="header--project">tush1504</h4>
      </header>
  )
}