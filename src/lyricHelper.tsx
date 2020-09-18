import lyricAPI from './lyricAPI'
import React from 'react'

interface SongData {
  fullTitle: string
  imagePath: string
  artist: string
  title: string
  lyrics: string
}

const getSong = async (input: string) => {
  const searchString = formatSearchString(input)
  const songList = await lyricAPI.getSongs(searchString)
  return songList[0]
}

const getLyrics = async (artist:string, title:string) => {
  const lyricData = await lyricAPI.getLyrics(artist, title)
  const lyrics: string = lyricData.split('\n').map((item: string, i: number) => <span key={i}>{item}<br/></span>)
  return lyrics
}


const getSongData = async (input: string) =>  {
  
  const data = await getSong(input)
  
  const fullTitle: string = data.result.full_title
  const imagePath: string = data.result.header_image_thumbnail_url
  const artist: string = data.result.primary_artist.name
  const title: string = data.result.title

  const lyrics = await getLyrics(artist, title)
  //const lyrics: string = lyrics
  const songData: SongData = {
    fullTitle,
    imagePath,
    artist,
    title,
    lyrics
  }
  return songData
}

const formatSearchString = (input: string) => {
  return input.replaceAll(" ", "%20")
}

export { getSongData }