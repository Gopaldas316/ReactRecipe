import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route path={["/", "/:id"]} >
        <Home/>
      </Route>
    </div>
  );
}

export default App;
