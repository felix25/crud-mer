import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Login from './pages/login/'
import Dashboard from './pages/dashboard/'
import Clientes from './pages/clientes/'
import Autos from './pages/autos/'
import Reparaciones from './pages/reparaciones/'
import Sidebars from './components/sidebar/sidebar.components'
import Headers from './components/header/header.components'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {
            localStorage.getItem('isAuthenticated') ? (
              <>
                <Headers/>
                <Sidebars/>
                <Redirect from="/" to="/dashboard"/>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/clientes" component={Clientes} />
                <Route exact path="/autos" component={Autos} />
                <Route exact path="/reparaciones" component={Reparaciones} />
              </>
            ):<>
              <Route exact path="/login" component={Login} />
              <Redirect from="/" to="/login"/>
            </>
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
