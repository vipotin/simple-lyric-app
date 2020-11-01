import axios from 'axios'
import config from './config'


const baseUrl = 'https://api.lyrics.ovh/v1'

const getSongs = async (search: string) => {
  const res = await axios.get(`https://api.genius.com/search?q=${search}&access_token=${config.ACCESS_TOKEN}`)
  console.log(res)
  const songList = res.data.response.hits
  return songList
}

const getLyrics = async (artist: string, title: string) => {
  const res = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  return res.data.lyrics
  // const artistInput = artist.replaceAll(" ", "%20")
}

const getLyricHtml = async (url: string) => {
  const res = await axios.get(url)
  console.log(res)
  return res
}


const find = async (name: string, title: string) => {
  const req = await axios.get(`${baseUrl}/${name}/${title}`)
  console.log(req.data)
  return req.data
}

const testFunction = () => {
  const sum = 1 + 2 + 3
  return sum
}

export default {getSongs, find, getLyrics, testFunction}
