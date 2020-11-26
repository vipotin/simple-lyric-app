import React, { useState } from 'react'
import './styles/main.css'
import { SongData } from './types'
import Header from './components/Header'
import Lyrics from './components/Lyrics'
import Search from './components/Search'
import ResultList from './components/ResultList'
import Footer from './components/Footer'

function App(): JSX.Element {
  const [lyrics, setLyrics] = useState([<></>])
  const [title, setTitle] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [list, setList] = useState<SongData[]>([])
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="container">
      <Header/>
      <div className="content">
        <Search 
        setList={setList}
        setShowResults={setShowResults}
        placeHolder="Type the artist and the song you are looking for"/>
        <ResultList list={list} setLyrics={setLyrics} 
        setTitle={setTitle} setImagePath={setImagePath} 
        setShowResults={setShowResults}
        showResults={showResults}/>
        <Lyrics lyrics={lyrics} title={title} artist="" imagePath={imagePath}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
