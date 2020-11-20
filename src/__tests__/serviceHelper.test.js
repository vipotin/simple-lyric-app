import { getSongs, getLyrics } from '../songDataService'
import React from 'react'
import { getLyricData } from '../serviceHelper'

describe('Service helper ', () => {
  test('formats fetches lyric data', async () => {
    const lyrics = await getLyricData('test', 'test')
    expect(lyrics).toStrictEqual([<span key={0}>Test lyrics<br /></span>])
  })

  // TODO

  // getSongData

  // getDataofTopHits
})