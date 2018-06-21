import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {

    super(props);
    this.date = new Date();
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.state = {
      month: this.date.getMonth(),
      year: this.date.getFullYear(),
    };
    /* ******************* EventHandling Binding *****************    */
    this.getNext = this.getNext.bind(this);
    this.getPrevious = this.getPrevious.bind(this);
    /* ***********************************************************    */
  }

  getPrevious() {
    if (this.state.month >= 1) {
      this.setState(prevState => ({ month: prevState.month - 1 }))
    } else {
      this.setState(prevState => ({ month: 11 }))
      this.setState(prevState => ({ year: prevState.year - 1 }))
    }
  }


  getNext() {
    if (this.state.month < 11) {
      this.setState(prevState => ({ month: prevState.month + 1 }))
    } else {
      this.setState(prevState => ({ month: 0 }))
      this.setState(prevState => ({ year: prevState.year + 1 }))
    }
  }

  getMonth(month) {
    switch (month) {
      case 0: return this.months[0];
      case 1: return this.months[1];
      case 2: return this.months[2];
      case 3: return this.months[3];
      case 4: return this.months[4];
      case 5: return this.months[5];
      case 6: return this.months[6];
      case 7: return this.months[7];
      case 8: return this.months[8];
      case 9: return this.months[9];
      case 10: return this.months[10];
      case 11: return this.months[11];
    }
  }

  getYear(year) {
    return year;
  }

  render() {
    return (
      <div className="ympicker-container">
        <div><input type="button" className="month-button" value="<" onClick={this.getPrevious} /></div>
        <div>
          {this.getMonth(this.state.month)} {this.getYear(this.state.year)}
        </div>
        <div><input type="button" className="month-button" value=">" onClick={this.getNext} /></div>
      </div>
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
