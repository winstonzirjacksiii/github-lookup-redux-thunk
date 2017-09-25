import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import View from '../single'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/view/randoId">Temporary Link to Single</Link>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/view/:githubId" component={View} />
    </main>
  </div>
)

export default App