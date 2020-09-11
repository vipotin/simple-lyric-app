import React from 'react'
import githubLogo from '../images/GitHub-Mark-Light-32px.png'

const Header: React.FC = () => {
  return (
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
  )
}

export default Header