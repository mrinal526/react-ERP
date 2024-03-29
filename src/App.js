import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import RootPage from "./pages/admin/RootPage";
import CustomerRootPage from "./pages/customer/RootPage";


function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/app/dashboard" />
            </Route>
            <Route path="/app" component={CustomerRootPage}></Route>
            {/* Admin Routers */}
            <Route path="/admin" component={RootPage}></Route>
            <Route exact path="" component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
