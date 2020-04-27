import React from 'react';
import Books from './Books';
import Home from './Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  
  return (
            <Router>
            <div>
              <Switch>
                <Route path="/books">
                  <Books />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
  );
}

export default App;
