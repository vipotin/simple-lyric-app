import React from 'react'

interface LyricProps  {
  lyrics: JSX.Element[];
  title: string;
  artist: string;
  imagePath: string;
}

const Lyrics: React.FC<LyricProps> = ({title, imagePath,lyrics}) => {
  return (
      <div className="lyrics">
        <div className="lyricsInfo">
          <h3 id="title">{title}</h3>
          {imagePath ? <img src={imagePath} alt="cover image"/> : null}
        </div>
        {lyrics.map(a => (
          <p key={a.key}>{a}</p>
        ))}
    </div>
  )
}

export default Lyrics