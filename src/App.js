import React from "react";
import Main from "./components/MainPage";
import Register from './components/Auth/Register';
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logout from "./components/Auth/Logout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path='/register' component={Register}/>
          <Route exact path="/main" component={Main} />
          <Route exact path='/logout' component={Logout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
