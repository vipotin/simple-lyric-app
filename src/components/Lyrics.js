import React from 'react'

const Lyrics = ({lyrics}) => {
  return (
      <div className="lyrics">
      <h3 id="title">Replay - Lady Gaga</h3>
      <p>{lyrics}</p>
    </div>
  )
}

export default Lyrics