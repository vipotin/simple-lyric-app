export interface SongData {
  fullTitle: string
  imagePath: string
  artist: string
  title: string
  lyrics: string
  id: number
}

export interface ResultData {
  full_title: string,
  header_image_thumbnail_url: string,
  title: string,
  primary_artist: { name: string },
  id: number
}

export interface HitData {
  index: string,
  result: ResultData
}
