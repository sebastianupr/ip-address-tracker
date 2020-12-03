import React, { useState, useEffect } from 'react'
import './App.css'
import Home from 'src/views/Home'
import SearchIp from 'src/views/SearchIp'
import getLocation from 'src/services/getLocation'
import Context from './Context'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  const [ infoLocation, setInfoLocation ] = useState(null)

  useEffect(() => {
    getLocation().then(setInfoLocation)
  }, [])

  return (
    <Context.Provider value={{infoLocation, setInfoLocation}}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/address/:address' component={SearchIp}/>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}
