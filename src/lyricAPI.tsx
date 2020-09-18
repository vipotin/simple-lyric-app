import axios from 'axios'
import config from './config'


const baseUrl = 'https://api.lyrics.ovh/v1'

const getSongs = async (search: string) => {
  const res = await axios.get(`https://api.genius.com/search?q=${search}&access_token=${config.ACCESS_TOKEN}`)
  const songList = res.data.response.hits
  console.log(songList)
  return songList
}

const getExample = async () => {
  fetch(`https://api.genius.com/artists/16775?access_token=${config.ACCESS_TOKEN}`)
    .then(response => response.json())
    .then(response => console.log(response.data))
  //return req.data
}

const getLyrics = async (artist: string, title: string) => {
  const res = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  return res.data.lyrics
  // const artistInput = artist.replaceAll(" ", "%20")
}


// const getLyricHtml = async (url: string) => {
//   const res = await fetch(url, { mode: 'no-cors'})
//   console.log(res)
//   return res
// }

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

export default {getSongs, find, getExample, getLyrics}
