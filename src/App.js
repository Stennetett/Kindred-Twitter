import React from 'react';
import './App.css';
import './flowDesign.css';
import Hello from "./mainMenu";
import Shop from "./Shop";
import Login from "./loginMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
  
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={Hello} />
          <Route path="/shop" component={Shop} />
        </Switch>
      
    </div>
    </Router >
  );
}



export default App;
