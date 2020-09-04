import React, {useState} from 'react';
import './styles/main.css';
import LyricAPI from './lyricAPI'
import githubLogo from './images/GitHub-Mark-Light-32px.png'


function App() {
  const [lyrics, setLyrics] = useState("")
  const searchPlaceHolder = "Type the artist and the song you are looking for"

  const searchLyrics = async () => {
    const lyricData = await LyricAPI.find("lady gaga", "replay")
    console.log(lyricData)
    let lyricsWithLineBreaks = lyricData.lyrics.split('\n').map ((item, i) => <span key={i}>{item}<br/></span>);
    setLyrics(lyricsWithLineBreaks)
  }

  return (
    <div className="container">
      <header>
        <div className="nav">
          <div>
            <a className="nav__item" href="https://github.com/vipotin" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="Github"/>
            </a>
          </div>
          <h2 className="nav__item">Your favorite lyrics</h2>
          <div className="nav__item burger-menu">
            <div className="bar1" key="b1" />
            <div className="bar2" key="b2" />
            <div className="bar3" key="b3" />
          </div>
        </div>
      </header>
      <div className="search">
        <input type="text" id="search-bar" placeholder={searchPlaceHolder}/>
        <button onClick={searchLyrics}>Search</button>
      </div>
      <div className="lyrics">
        <h3 id="title">Replay - Lady Gaga</h3>
        <p>{lyrics}</p>
      </div>
      <div className="footer">
      <small>&copy; Copyright 2020</small>
      </div>
    </div>
  );
}

export default App;
