import React from 'react'
import axios from 'axios'

const baseUrl = 'https://api.lyrics.ovh/v1'

const getReplay = async () => {
  const req = await axios.get('https://api.lyrics.ovh/v1/lady gaga/replay')
  //console.log(req.data)
  return req.data
}

const find = async (name, title) => {
  const req = await axios.get(`${baseUrl}/${name}/${title}`)
  console.log(req.data)
  return req.data
}

export default {getReplay, find}
