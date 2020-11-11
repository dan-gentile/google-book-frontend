import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedPage from "./pages/SavedPage/SavedPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
        </Switch>
      </main>
    </Router>
  );
}
export default App;
