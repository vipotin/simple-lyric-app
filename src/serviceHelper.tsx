import { getSongs, getLyrics }from './songDataService'
import React from 'react'
import { SongData, HitData } from './types'

const searchRegExp = /\s/g;
const replaceWith = '%20';

// const getSongList = async (input: string) => {
//   let songList = []
//   if (input.length > 0) {
//     const searchString = formatSearchString(input)
//     songList = await getSongs(searchString)
//   }
//   return songList
// }

const getLyricData = async (artist:string, title:string): Promise<JSX.Element[]>  => {
  const lyricData: string = await getLyrics(artist, title)
  const lyrics = lyricData.split('\n').map((item: string, i: number) => <span key={i}>{item}<br/></span>)
  return lyrics
}

const getDataOfTopHits = async (input: string): Promise<SongData[]>  => {
  let songList: HitData[] = []
  if (input.length > 0) {
    const searchString = formatSearchString(input)
    songList = await getSongs(searchString)
  }
  const dataList: SongData[] = []
  
  if (songList.length > 0) {
    const limit = 3
    const len = (songList.length < limit) ? songList.length : limit
    for (let i = 0; i < len; i++) {
      const song: SongData = await getSongData(songList[i])
      dataList.push(song)
    }
  }
  return dataList
}

const getSongData = async (data: HitData): Promise<SongData> =>  {
  
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

const formatSearchString = (input: string): string => {
  const result = input.replace(searchRegExp, replaceWith);
  return result
}

export { getLyricData, getDataOfTopHits, formatSearchString, getSongData }