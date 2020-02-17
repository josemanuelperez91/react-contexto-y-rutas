import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import { Context } from "./context";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      season: "",
      animal: ""
    };
  }
  onRegister = formData => {
    this.setState({
      name: formData.name,
      season: formData.season,
      animal: formData.animal
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          onRegister: this.onRegister,
          ...this.state
        }}
      >
        <Routes>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/welcome" component={Welcome} />
            <Route component={Register} />
          </Switch>
        </Routes>
      </Context.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
