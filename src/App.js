import React, {useState} from 'react';
import './styles/main.css';
import LyricAPI from './lyricAPI'


function App() {
  const [lyrics, setLyrics] = useState("")
  const searchPlaceHolder = "Type the artist and the song you are looking for"

  const searchLyrics = async () => {
    const lyricData = await LyricAPI.getReplay()
    console.log(lyricData)
    let lyricsWithLineBreaks = lyricData.lyrics.split('\n').map ((item, i) => <span key={i}>{item}<br/></span>);
    setLyrics(lyricsWithLineBreaks)
  }

  return (
    <div className="container">
      <h2>Your favorite lyrics</h2>
      <div className="search">
        <input type="text" id="search-bar" placeholder={searchPlaceHolder}/>
        <button onClick={searchLyrics}>Search</button>
      </div>
      <div className="lyrics">{lyrics}</div>
    </div>
  );
}

export default App;
