import React, {useState} from 'react'
import './styles/main.css'

import Header from './components/Header'
import Lyrics from './components/Lyrics'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {
  const [lyrics, setLyrics] = useState("")

  return (
    <div className="container">
      <Header/>
      <Search setLyrics={setLyrics} placeHolder="Type the artist and the song you are looking for"/>
      <Lyrics lyrics={lyrics} title="" artist="" />
      <Footer/>
    </div>
  );
}

export default App;
