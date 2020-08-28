import React, {useState} from 'react';
import './styles/main.css';
import LyricAPI from './lyricAPI'


function App() {
  const [lyrics, setLyrics] = useState("")

  const searchLyrics = async () => {
    const lyricData = await LyricAPI.getReplay()
    console.log(lyricData)
    let lyricsWithLineBreaks = lyricData.lyrics.split('\n').map ((item, i) => <span key={i}>{item}<br/></span>);
    setLyrics(lyricsWithLineBreaks)
  }

  return (
    <div className="container">
        <h2>Search by artist and song</h2>
        <div class="search">
          <input type="text" id="search-bar"/>
          <button onClick={searchLyrics}/>
        </div>
        <div>
          {lyrics}
        </div>
    </div>
  );
}

export default App;
