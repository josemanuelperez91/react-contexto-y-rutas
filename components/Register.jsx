import React from "react";
import { ANIMALS, SEASONS } from "../constants/options";
import { Context } from "../context";

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      season: SEASONS[0].id,
      animal: ANIMALS[0].id
    };
  }
  handleName = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleAnimal = event => {
    this.setState({
      animal: event.target.value
    });
  };
  handleSeason = event => {
    this.setState({
      season: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { onRegister } = this.context;
    onRegister(this.state);
    this.props.history.push("/welcome");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleName} name="name" placeholder="Name" />
        <br />
        <select onChange={this.handleAnimal}>
          {ANIMALS.map(animal => (
            <option key={animal.id} value={animal.id}>
              {animal.name}
            </option>
          ))}
        </select>
        <br />
        <select onChange={this.handleSeason}>
          {SEASONS.map(season => (
            <option key={season.id} value={season.id}>
              {season.name}
            </option>
          ))}
        </select>
        <br />

        <button>Submit</button>
      </form>
    );
  }
}

Register.contextType = Context;
