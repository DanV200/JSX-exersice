import React, { Component } from "react";
import Movieshodi from "./movieshodi";

class Allmovies extends Component {
  state = {
    movies: [
      {
        index: 0,
        id: 31,
        name: "shrek",
        length: "2:20",
        genre: "fantasy", //index0
      },
      {
        index: 1,
        id: 4363,
        name: "ironman",
        length: "1:45", //index1
        genre: "fantasy",
      },
      {
        index: 2,
        id: 2,
        name: "f&f3",
        length: "3:10", //index2
        genre: "action",
      },
      {
        index: 3,
        id: 80439,
        name: "titanic",
        length: "3:40", //index3
        genre: "drama",
      }
    ]
  }

  render() {
    return (
      
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Length</th>
              <th>Genre</th>
              <th>Delete</th>
              <th>Patch</th>
            </tr>
          </thead>
            <tbody>
          {this.state.movies.map((m) => (
            <Movieshodi
              key={m.index}
              index={m.index}
              name={m.name}
              length={m.length}
              genre={m.genre}
              delete={()=>this.handledelete(m.index)}
              patch={()=>this.handlepatch(m.index)}
            />
            
          ))}
          </tbody>
        </table>
    );

  }

  handledelete=(movieid)=>{
    const movies=this.state.movies.filter(val=>val.index!==movieid);
    this.setState({movies})
  }
  handlepatch=(movieid)=>{
    const movies=this.state.movies.map(val=>{
        if(val.index==movieid)
        val.name='null'
        return val
    })
    this.setState({movies})
  }
}

export default Allmovies;
