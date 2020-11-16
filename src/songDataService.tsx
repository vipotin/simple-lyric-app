import axios from 'axios'
import config from './config'
import { HitData } from './types'


const baseUrlLyricService = 'https://api.lyrics.ovh/v1'
const baseUrlGenius = 'https://api.genius.com/search?'

const getSongs = async (search: string): Promise<HitData[]> => {
  const res = await axios.get(`${baseUrlGenius}q=${search}&access_token=${config.ACCESS_TOKEN}`)
  return res.data.response.hits
}

const getLyrics = async (artist: string, title: string): Promise<string>  => {
  const res = await axios.get(`${baseUrlLyricService}/${artist}/${title}`)
  return res.data.lyrics
}

export { getSongs, getLyrics }
