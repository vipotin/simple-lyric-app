import lyricAPI from './lyricAPI'

interface SongData {
  fullTitle: string
  imagePath: string
  artist: string
  title: string
}

export const getSongData = (data: { result: { full_title: string; header_image_thumbnail_url: string; primary_artist: { name: string }; title: string } }): SongData =>  {
  const fullTitle: string = data.result.full_title
  const imagePath: string = data.result.header_image_thumbnail_url
  //const lyricUrl = data.result.url
  const artist: string = data.result.primary_artist.name
  const title: string = data.result.title
  const songData = {
    fullTitle,
    imagePath,
    artist,
    title
  }
  return songData
}

export const formatSearchString = (input: string) => {
  return input.replaceAll(" ", "%20")
}