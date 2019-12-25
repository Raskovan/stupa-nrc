import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Thanghka from './Components/Thanghka'
import Admin from './Components/Admin'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Thanghka} />
      <Route
        path="/admin"
        exact
        render={props => <Admin nodes={Thanghka} {...props} />}
      />
    </Router>
  )
}

export default App
