import React, { Component } from "react";
class Greetme extends Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
  };
  render() {
    return (
      <div className="text-center">
        <input
          onChange={(e) => (this.state.firstName = e.target.value)}
          type={"text"}
          placeholder="First Name" 
        ></input>
        <br />
        <input
          onChange={(e) => (this.state.lastName = e.target.value)}
          type={"text"}
          placeholder="Last Name"
        ></input>
        <br />

        <input
          onChange={() => (this.state.gender = "mr.")}
          className="form-check-input"
          type="radio"
          name="gender"
          id="men"
        />
        <label> Men</label>

        <input
          onChange={() => (this.state.gender = "mrs. ")}
          className="form-check-input"
          type="radio"
          name="gender"
          id="women"
        />
        <label> Women</label>
        <br />
       
        <button 
          onClick={() =>
            alert(
              "hello " +
                this.state.gender +
                this.state.firstName +
                " " +
                this.state.lastName
            )
          }
          className="btn btn-danger">
        
          Greet Me
        </button>
        
        </div>
    );
  }
}

export default Greetme;
