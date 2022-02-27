import React, { Component } from "react";
import "./../App.css";
import "./../style.css";
import image from "./test.png";

class No extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suly: "",
      magassag: "",
      bmi: "",
      uzenet: "",
      kivanatosErtek: "",
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.szamitasBMI = this.szamitasBMI.bind(this);
    this.szamit = this.szamit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  szamitasBMI() {
    let magassagNegyzete =
      ((this.state.magassag / 100) * this.state.magassag) / 100;
    let bmi = this.state.suly / magassagNegyzete;
    let alacsonyErtek = Math.round(18.5 * magassagNegyzete);
    let magasErtek = Math.round(24.9 * magassagNegyzete);
    let uzenet = "";

      if (bmi >= 18.5 && bmi <= 24.9) {
      uzenet = "Az Ön testsúlya megfelelő!";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      uzenet = "Túlsúlyos!";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      uzenet = "I. fokú elhízás!";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      uzenet = "II. fokú elhízás!";
    } else if (bmi > 42.0) {
      uzenet = "III. fokú elhízás!";
    } else if (bmi < 18.5 && bmi > 10) {
      uzenet = "Sajnos, Ön sovány!";
    } else if (bmi = 0) {
      uzenet = "Úgy tűnik, nem adott meg valós adatokat!";
    } else if (bmi <= 10){
      uzenet = "Úgy tűnik, nem adott meg valós adatokat!";
    }


    this.setState({ bmi: "BMI értéke: " + Math.round(bmi * 100) / 100 });

    this.setState({ uzenet: uzenet });
    this.setState({
      kivanatosErtek:
        "A kívánatos szélső értékek " +
        alacsonyErtek +
        " - " +
        magasErtek +
        " kg között változnak.",
    });
  }
  
  semmi(bmi) {
    if (isNaN(bmi)) {
      return 0;
    }
    return bmi;
  }

  szamit(e) {
    this.szamitasBMI();
    e.preventDefault();
  }
  reset = () => {
    this.setState({ magassag: "" });
    this.setState({ suly: "" });
    this.setState({ uzenet: "" });
    this.setState({ bmi: "" });
    this.setState({ kivanatosErtek: "" });
    
  };

  render() {
    return (
      <div className="No">
        <div className="No-header" />
        <form onSubmit={this.szamit}>
          <h2>TESTTÖMEG INDEX KALKULÁTOR</h2>
          <p>
            A BMI a kg-ban számított testtömeg és a cm-ben számított
            testmagasság négyzetének hányadosa (kg/m2). Pontosságát tekintve 18
            év felettiek esetében alkalmazható.
          </p>
          <div>
            <img src={image} />
          </div>
          <div>
            <label>Adja meg a TESTMAGASSÁGÁT! (cm)</label>
            <input
              type="number"
              name="magassag"
              value={this.state.magassag}
              onChange={this.handleChange}
            />
          </div>
          

          <div>
            <label class="tavolsag">Adja meg a TESTSÚLYÁT! (kg)</label>
            <input
              type="number"
              name="suly"
              value={this.state.suly}
              onChange={this.handleChange}
            />
            <br />
          </div>
          <div>
            <button type="submit">BMI számítása</button>
            <button type="reset" onClick={this.reset}>
              Új érték megadása
            </button>
          </div>
          <div>
            <h4> {this.state.uzenet}</h4>
            <h4>{this.state.bmi} </h4>
            <h4>{this.state.kivanatosErtek} </h4>
            
          </div>
          <div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default No;
