import React from 'react'
import LyricAPI from '../lyricAPI'

interface SearchProps {
  placeHolder: string;
  setLyrics: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({placeHolder, setLyrics}) => {
  const searchLyrics = async () => {
    const lyricData = await LyricAPI.find("lady gaga", "replay")
    console.log(lyricData)
    const lyricsWithLineBreaks: string = lyricData.lyrics.split('\n').map((item: string, i: number) => <span key={i}>{item}<br/></span>)
    setLyrics(lyricsWithLineBreaks)
  }

  return (
  <div className="search">
    <input type="text" id="search-bar" placeholder={placeHolder}/>
    <button onClick={searchLyrics}>Search</button>
  </div>
  )
}

export default Search