import React, {Component } from 'react';
import { delMovie, delName, getmovies } from '../services/movie';


class Movies extends Component {
    state = { 
        movies: getmovies()
     } 
    render() { 
        return (
            <div>
                <h1>we have {this.state.movies.length} movies</h1>
           <table className="table">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Length</th>
                    <th>Genre</th>
                    <th>Delete</th>
                    <th>Patch</th>
                </tr>
            </thead>


            <tbody>
                {this.state.movies.map((m)=>(
                <tr key={m.index}>
                    <th>{m.index+1}</th>
                    <th>{m.id}</th>
                    <th>{m.name}</th>
                    <th>{m.length}</th>
                    <th>{m.genre}</th>
                    <th>
                    <button
                     id={m.index}
                     className='btn btn-danger' 
                     onClick={(e)=>
                        (this.state.movies=this.setState({
                            movies: delMovie(e.target.id) }))}
                            >Delete</button></th>
                    <th><button id={m.index} onClick={(e)=>(this.state.movies=this.setState ({movies:delName(e.target.index)}))}  className='btn btn-success' >Patch</button>
                    </th>
                </tr>
                ))}
            </tbody>
           </table>
           </div>
           
        );
    }
   
 
    
  }

 

export default Movies;