import React, {useState} from 'react'
import LyricAPI from '../lyricAPI.js'

const Search = ({setLyrics}) => {
  const searchPlaceHolder = "Type the artist and the song you are looking for"
  const searchLyrics = async () => {
    const lyricData = await LyricAPI.find("lady gaga", "replay")
    console.log(lyricData)
    let lyricsWithLineBreaks = lyricData.lyrics.split('\n').map ((item, i) => <span key={i}>{item}<br/></span>)
    setLyrics(lyricsWithLineBreaks)
  }

  return (
  <div className="search">
    <input type="text" id="search-bar" placeholder={searchPlaceHolder}/>
    <button onClick={searchLyrics}>Search</button>
  </div>
  )
}

export default Search