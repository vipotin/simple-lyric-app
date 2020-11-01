import React, { useEffect, useState } from 'react'
import { SongData } from '../types'

const exampleList = ["Poker Face by Lady Gaga", "Bad Romance by Lady Gaga"]

interface ResultProps {
  list: SongData[];
  setLyrics: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setImagePath: React.Dispatch<React.SetStateAction<string>>;
}

const Lyrics: React.FC<ResultProps> = ({list, setLyrics, setImagePath, setTitle}) => {
  
  const [songList, setSongList] = useState<SongData[]>(list)

  const searchLyrics = async (song: SongData) => {
    console.log("search")
    setLyrics(song.lyrics)
    setTitle(song.fullTitle)
    setImagePath(song.imagePath)
    setSongList([])
    // setImagePath(songData[0].result.header_image_url)
  }
  
  return (
    <ul>
      {list.map(item => {
        return(
        <li key={item.id}>
          <button key={item.id} onClick={() => searchLyrics(item)}>
            {item.fullTitle}
          </button>
        </li>
        )
     })}
    </ul>

  )
}

export default Lyrics