import React from 'react'
import '../styles/Thanghka.css'
import * as texts from '../assets/texts'

function Thanghka(props) {
  return (
    <div className="border">
      <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
        <header className="content_container">
          <div className="dw_logo" />
        </header>
        <div className="sun-moon-container">
          <img
            src={require('../assets/nrc-sun.png')}
            alt="Sun"
            className="sun"
          />
          <img
            src={require('../assets/nrc-moon.png')}
            alt="Moon"
            className="moon"
          />
        </div>
        <div className="cloud-small m1">
          <img
            src={require('../assets/nrc-cloud-small.png')}
            alt="Cloud One"
            width="100%"
          />
        </div>
        <div className="cloud-big m2">
          <img
            src={require('../assets/nrc-cloud-big.png')}
            alt="Cloud Two"
            width="100%"
          />
        </div>
        <div className="mount-stupa-container">
          <img
            src={require('../assets/nrc-mount.png')}
            alt="Mountains"
            width="100%"
          />
          <img
            src={require('../assets/nrc-stupa.png')}
            alt="Stupa"
            width="100%"
            className="stupa"
          />
        </div>
        <div className="cow-deer-container">
          <div className="deer">
            <img
              src={require('../assets/nrc-deer.png')}
              alt="Deer"
              width="100%"
            />
          </div>
          <div className="cow">
            <img
              src={require('../assets/nrc-cow.png')}
              alt="Cow"
              width="100%"
            />
          </div>
        </div>
        <div>
          <p className="title-text">{texts.title}</p>
          <p className="body-text">{texts.body}</p>
        </div>
        <div className="grass-naga-container">
          <img
            src={require('../assets/nrc-naga.png')}
            alt="Naga"
            className="naga"
          />
          <img
            src={require('../assets/nrc-grass.png')}
            alt="Grass"
            width="100%"
          />
        </div>
      </div>
    </div>
  )
}

export default Thanghka
