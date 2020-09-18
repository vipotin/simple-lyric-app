import React, {useState} from 'react'
import './styles/main.css'

import Header from './components/Header'
import Lyrics from './components/Lyrics'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {
  const [lyrics, setLyrics] = useState("")
  const [title, setTitle] = useState("")
  const [imagePath, setImagePath] = useState("")

  return (
    <div className="container">
      <Header/>
      <Search setLyrics={setLyrics} setTitle={setTitle} setImagePath={setImagePath} placeHolder="Type the artist and the song you are looking for"/>
      <Lyrics lyrics={lyrics} title={title} artist="" imagePath={imagePath}/>
      <Footer/>
    </div>
  );
}

export default App;
