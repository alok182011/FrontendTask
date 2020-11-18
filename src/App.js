import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ConfList from "./pages/ConfList";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/conflist" component={ConfList} />
        </Switch>
      </div>
    );
  }
}

export default App;
