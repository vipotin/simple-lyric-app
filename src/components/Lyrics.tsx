import React from 'react'

interface LyricProps  {
  lyrics: string;
  title: string;
  artist: string;
}

const Lyrics: React.FC<LyricProps> = ({title, artist, lyrics}) => {
  return (
      <div className="lyrics">
      <h3 id="title">{title} - {artist}</h3>
      <p>{lyrics}</p>
    </div>
  )
}

export default Lyrics