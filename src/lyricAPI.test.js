import lyricService from './lyricAPI'
//import axios from 'axios'

jest.mock('axios')

const searchInput = 'lady%20gaga%20poker%20face'
const artist = 'Lady Gaga'
const title = 'Poker Face'

test('TestFunction passes test', () => {
  const sum = 6
  expect(lyricService.testFunction()).toBe(sum)
})

test('Fetches list of songs', async () => {
  const songList = await lyricService.getSongs(searchInput)
  console.log(songList)
  expect(songList).not.toBe(null)
})

test('Fetches lyrics', async () => {
  const lyrics = await lyricService.getLyrics(artist, title)
  expect(lyrics).not.toBe(null)
})