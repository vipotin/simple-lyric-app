import axios from 'axios'
import config from './config'


const baseUrl = 'https://api.lyrics.ovh/v1'

const getSongs = async (search: string) => {
  const res = await axios.get(`https://api.genius.com/search?q=${search}&access_token=${config.ACCESS_TOKEN}`)
  //console.log(res)
  return res.data.response.hits
}

const getLyrics = async (artist: string, title: string) => {
  const res = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  //console.log(res)
  return res.data.lyrics
  // const artistInput = artist.replaceAll(" ", "%20")
}

const testFunction = () => {
  const sum = 1 + 2 + 3
  return sum
}

export { getSongs, getLyrics, testFunction }
