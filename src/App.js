import React from 'react'
import './styles/App.css'

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="sun-moon-container">
        <img src={require('./assets/nrc-sun.png')} alt="Sun" className="sun" />
        <img
          src={require('./assets/nrc-moon.png')}
          alt="Moon"
          className="moon"
        />
      </div>
      <div className="cloud-small m1">
        <img
          src={require('./assets/nrc-cloud-small.png')}
          alt="Cloud One"
          width="100%"
        />
      </div>
      <div className="cloud-big m2">
        <img
          src={require('./assets/nrc-cloud-big.png')}
          alt="Cloud Two"
          width="100%"
        />
      </div>
      <div className="mount-stupa-container">
        <img
          src={require('./assets/nrc-mount.png')}
          alt="Mountains"
          width="100%"
        />
        <img
          src={require('./assets/nrc-stupa.png')}
          alt="Stupa"
          width="100%"
          className="stupa"
        />
      </div>
      <div className="cow-deer-container">
        <div className="deer">
          <img src={require('./assets/nrc-deer.png')} alt="Deer" width="100%" />
        </div>
        <div className="cow">
          <img src={require('./assets/nrc-cow.png')} alt="Cow" width="100%" />
        </div>
      </div>
      <div>
        <p className="title-text">NRC STUPA OF COMPLETE VICTORY</p>
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="grass-naga-container">
        <img
          src={require('./assets/nrc-naga.png')}
          alt="Naga"
          className="naga"
        />
        <img src={require('./assets/nrc-grass.png')} alt="Grass" width="100%" />
      </div>
    </div>
  )
}

export default App
