import React, {useState} from 'react'
import './styles/main.css'
import { SongData } from './types'

import Header from './components/Header'
import Lyrics from './components/Lyrics'
import Search from './components/Search'
import ResultList from './components/ResultList'
import Footer from './components/Footer'

function App() {
  const [lyrics, setLyrics] = useState("")
  const [title, setTitle] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [list, setList] = useState<SongData[]>([])

  return (
    <div className="container">
      <Header/>
      <Search setList={setList} placeHolder="Type the artist and the song you are looking for"/>
      <ResultList list={list} setLyrics={setLyrics} setTitle={setTitle} setImagePath={setImagePath}/>
      <Lyrics lyrics={lyrics} title={title} artist="" imagePath={imagePath}/>
      <Footer/>
    </div>
  );
}

export default App;
