import React, { useState } from 'react'
import lyricAPI from '../lyricAPI'
import LyricAPI from '../lyricAPI'
import { formatSearchString, getSongData } from '../lyricHelper'



interface SearchProps {
  placeHolder: string;
  setLyrics: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setImagePath: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({placeHolder, setLyrics, setImagePath, setTitle}) => {

  const [searchInput, setSearchInput] = useState("")

  const searchLyrics = async () => {
    const searchString = formatSearchString(searchInput)
    
    const songList = await LyricAPI.getSongs(searchString)
    const songData = getSongData(songList[0])
    const lyricData = await lyricAPI.getLyrics(songData.artist, songData.title)
    console.log(lyricData)
    const lyricsWithLineBreaks: string = lyricData.split('\n').map((item: string, i: number) => <span key={i}>{item}<br/></span>)
    
    setLyrics(lyricsWithLineBreaks)
    setTitle(songData.fullTitle)
    setImagePath(songData.imagePath)
  }

  return (
  <div className="search">
    <input type="text" id="search-bar" placeholder={placeHolder} value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
    <button onClick={searchLyrics}>Search</button>
  </div>
  )
}

export default Search