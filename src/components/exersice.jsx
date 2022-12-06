import React, { Component } from 'react';

class Exersice extends Component {
    state ={
        count:0,
        // names:['nadav','tommy','adi','tommer']
    };
    style={
        fontSize:30
    }
    render() { 
        return (
        <div>
            <h1 style={this.style} className={this.changeBG()}>{this.formatCount()} </h1>
            <button  
            onClick={this.handleIncrement}
             className="btn btn-dark btn-sm"
             > + </button>
             <button className="btn btn-dark btn-sm" onClick= {this.handleMinus}>-</button>

        </div>);
    }

    // constructor(){
    //     super(); // create a componenet from its coinstructor
    //     // this in the const is the Class it self 
    //     // we use the bind function to pass over the this top anew function
    //     this.handleIncrement = this.handleIncrement.bind(this);// this function returns a new function 


    // }

    handleIncrement=()=>{
        this.setState( {count: this.state.count +1} );
    }
    handleMinus=()=>{
        this.setState( {count: this.state.count -1} );
    }

    changeBG() {
        let classes = "badge m-2 bg-"; //badge m-2 bg-success
        classes += (this.state.count === 0) ? 'warning' : 'success';
        return classes;
    }

    formatCount(){
        return this.state.count===0? 'Zero': this.state.count;
    }
}
 
export default Exersice;