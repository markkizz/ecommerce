import React, { Component } from "react";
import "./Homepage.scss";
import Directory from '../../components/Directory/Directory'

export class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Welcome to my Homepage</h1>
        <Directory />
      </div>
    );
  }
}

export default Homepage;
