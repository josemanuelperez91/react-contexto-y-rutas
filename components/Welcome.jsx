import React from "react";
import { Context } from "../context";
import { ANIMALS, SEASONS } from "../constants/options";

export default class Welcome extends React.Component {
  printDate = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>{this.context.name}</p>
        <p>{ANIMALS.find(animal => animal.id === this.context.animal).name}</p>
        <p>{SEASONS.find(season => season.id === this.context.season).name}</p>
        <p>{this.printDate()}</p>
      </div>
    );
  }
}

Welcome.contextType = Context;
