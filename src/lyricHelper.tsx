import lyricAPI from './lyricAPI'
import React from 'react'
import { SongData } from './types'

const getSongList = async (input: string) => {
  var songList = []
  if (input.length > 0) {
    const searchString = formatSearchString(input)
    songList = await lyricAPI.getSongs(searchString)
  }
  return songList
}

const getLyrics = async (artist:string, title:string) => {
  const lyricData = await lyricAPI.getLyrics(artist, title)
  const lyrics: string = lyricData.split('\n').map((item: string, i: number) => <span key={i}>{item}<br/></span>)
  return lyrics
}

const getDataOfTopHits = async (input: string) => {
  const songList = await getSongList(input)
  const dataList: SongData[] = []
  
  if (songList.length > 0) {
    const len = 3
    for (let i = 0; i < len; i++) {
      const song: SongData = await getSongData(songList[i])
      dataList.push(song)
    }
  }

  return dataList
}

const getSongData = async (data: any) =>  {
  
  const fullTitle: string = data.result.full_title
  const imagePath: string = data.result.header_image_thumbnail_url
  const artist: string = data.result.primary_artist.name
  const title: string = data.result.title
  const id: number = data.result.id
  const lyrics = ""

  const songData: SongData = {
    fullTitle,
    imagePath,
    artist,
    title,
    lyrics,
    id
  }
  return songData
}

const formatSearchString = (input: string) => {
  return input.replaceAll(" ", "%20")
}

export { getLyrics, getDataOfTopHits }