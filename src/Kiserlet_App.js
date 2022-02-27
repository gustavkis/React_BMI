import React, { Component } from "react";
import "./App.css";
import "./style.css";
import image from "./test.png";
import ferfi from "./Component/ferfi";
import no from "./Component/no";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Valasztas"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.formSubmit}>
        <div className="radio">
        <h2>TESTTÖMEG INDEX KALKULÁTOR</h2>
          
          <p>Kérem, adja meg nemét!</p>
          <label>
            <input
              type="radio"
              value="Férfi"
              checked={this.state.selectedOption === "Férfi"}
              onChange={this.onValueChange}
            />
            Férfi
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Nő"
              checked={this.state.selectedOption === "Nő"}
              onChange={this.onValueChange}
            />
            Nő
          </label>
          </div>
        <div>
          A választás : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Tovább
        </button>
      </form>
        <ferfi></ferfi>
        <no></no>
      </div>
    );
  }
}

export default App;
