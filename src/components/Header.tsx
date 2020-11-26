import React, { useState } from 'react'
import githubLogo from '../images/GitHub-Mark-Light-32px.png'

const Header: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <>
      <div className="nav">
        <div>
          <a className="nav__item" href="https://github.com/vipotin" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="Github"/>
          </a>
        </div>
        <h2 className="nav__item">Your favorite lyrics</h2>
        <div className="nav__item burger-menu" onClick={() => setShowSidebar(!showSidebar)}>
          <div className="bar1" key="b1" />
          <div className="bar2" key="b2" />
          <div className="bar3" key="b3" />
        </div>
      </div>

      <nav className={showSidebar ? "side-menu active" : "side-menu"}>
        <div className="burger-menu close" onClick={() => setShowSidebar(!showSidebar)}>
          <div className="bar1" key="b1" />
          <div className="bar2" key="b2" />
          <div className="bar3" key="b3" />
        </div>
        <div>
          <div className="references">
            <h3>Powered by </h3>
            <div className="refs">
              <a href="https://lyricsovh.docs.apiary.io/#" target="_blank" rel="noreferrer"> lyrics.ovh</a>
              <a href="https://genius.com" target="_blank" rel="noreferrer"> Genius</a>
            </div>
          </div>
        </div>
      </nav>
      </>
  )
}

export default Header