import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      {/* Header Component */}
      <Header />
      <Switch>
        {/* Home Page */}
        <Route path={["/", "/home"]}>
          <Home />
        </Route>
        {/* placeholder for future use? */}
        <Route path='/page'>
          {/* Future Page */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
