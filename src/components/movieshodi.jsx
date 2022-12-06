import React, { Component } from "react";

class Movieshodi extends Component {
  state = {};
  render() {
    return (
        <tr>
          <td> {this.props.index}</td>
          <td> {this.props.name}</td>
          <td> {this.props.length}</td>
          <td> {this.props.genre}</td>
          <td>
            <button className="btn btn-danger" onClick={this.props.delete}>Delete</button>
          </td>
          <td>
            <button className="btn btn-success" onClick={this.props.patch}>patch</button>
          </td>
        </tr>
    );
  }
}


export default Movieshodi;
