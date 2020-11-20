import React from 'react'
import { SongData } from '../types'
import { getLyricData } from '../serviceHelper'

interface ResultProps {
  list: SongData[];
  setLyrics: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setImagePath: React.Dispatch<React.SetStateAction<string>>;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  showResults: boolean;
}

const Lyrics: React.FC<ResultProps> = ({list, showResults, setLyrics, setImagePath, setTitle, setShowResults}) => {
  
  const searchLyrics = async (song: SongData) => {
    const lyrics = await getLyricData(song.artist, song.title)
    setLyrics(lyrics)
    if (lyrics.length > 1) {
      setTitle(song.fullTitle)
      setImagePath(song.imagePath)
      
    } else {
      setLyrics([<></>])
      setTitle("Oops. No lyrics were found.")
      setImagePath("")
    }
    setShowResults(false)
  }
  
  return (
    <ul className="search-results">
      {showResults && list.length == 0 ? "No results" : null}
      {showResults ? list.map(item => {
        return(
        <li key={item.id}>
          <button className="btn btn-result" key={item.id} onClick={() => searchLyrics(item)}>
            {item.fullTitle}
          </button>
        </li>
        )
     }): null}
    </ul>

  )
}

export default Lyrics