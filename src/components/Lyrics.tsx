import React, { useState } from 'react'

interface LyricProps  {
  lyrics: string;
  title: string;
  artist: string;
  imagePath: string;
}

// Show component only when a search result is found

const Lyrics: React.FC<LyricProps> = ({title, artist,imagePath,lyrics}) => {
  return (
      <div className="lyrics">
      <h3 id="title">{title}</h3>
      {imagePath ? <img src={imagePath} alt="cover image"/> : null}
      <p>{lyrics}</p>
    </div>
  )
}

export default Lyrics