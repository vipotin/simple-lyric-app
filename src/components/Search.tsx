import React, { useState } from 'react'
import { getDataOfTopHits } from '../lyricHelper'
import { SongData } from '../types'

interface SearchProps {
  placeHolder: string;
  setList: React.Dispatch<React.SetStateAction<SongData[]>>;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<SearchProps> = ({placeHolder, setList, setShowResults}) => {
  const [searchInput, setSearchInput] = useState("")

  const searchLyrics = async () => {
    const songData: SongData[] = await getDataOfTopHits(searchInput)
    setList(songData)
    setShowResults(true)
  }

  return (
  <div className="search">
    <input 
      type="text" id="search-bar" 
      placeholder={placeHolder} 
      value={searchInput} 
      onChange={e => setSearchInput(e.target.value)}
      onKeyPress={e => {
        if (e.key === "Enter") { searchLyrics() }
      }}/>
    <button className="btn" onClick={searchLyrics}>Search</button>
  </div>
  )
}

export default Search