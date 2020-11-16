import { rest } from 'msw'
import { getSongs, getLyrics } from '../songDataService'
import config from '../config'
import { server, rest } from '../test/server'

describe('Song data service ', () => {
  test("fetches song information", async () => {
    const hits = await getSongs('test song')
    expect(hits).toEqual([])
  })
  
  test("handles failure in song information search", async () => {
    server.use(
      rest.get(`https://api.genius.com/search?q=test&access_token=${config.ACCESS_TOKEN}`, (_req, res, ctx) => {
        return res(ctx.status(404));
      })
    )
    await expect(getSongs('test')).rejects.toThrow("404");
  })

  test("fetches lyrics", async () => {
    const lyrics = await getLyrics('test', 'test')
    expect(lyrics).toEqual('Test lyrics')
  })

  test("handles failure in lyric search", async () => {
    server.use(
      rest.get(`https://api.lyrics.ovh/v1/test1/test1`, (_req, res, ctx) => {
        return res(ctx.status(500));
      })
    )
    await expect(getLyrics('test1', 'test1')).rejects.toThrow("Request failed with status code 500");
  })
})

