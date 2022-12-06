import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    names: ["nadav", "tommy", "adi", "tomer"],
  };
  style = {
    fontSize: 100,
  };
  render() {
    return (
      <div>
        <button onClick={this.counterIncreament} className="btn btn-dark">
          +
        </button>
        <button onClick={this.counterDec} className="btn btn-primary">-</button>
        <input type="text"></input>

        <span className={this.changebg()}>{this.formatcount()}</span>
        <div>
          <ul>
            {this.state.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  changebg() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "success";
    return classes;
  }

  formatcount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }

  counterIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  counterDec = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default Counter;
