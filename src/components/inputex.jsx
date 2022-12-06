import React, { Component } from 'react';
class Inputex extends Component {
    state = {  
        names:['dan','yair']
        
    } 
    render() { 
        return (
            <div>
                 <input id='in' type={'text'} onKeyPress={(ev)=>this.keyPressHandle(ev)} />
                 <br />
                 {this.state.names.map(name=><button key={name}> {name} </button>)}

            </div>
        );
    }
   
keyPressHandle(ev){
    
if(ev.key==='Enter'){
let x=this.state.names.push(ev.target.value);
this.setState({x});
}
}



}
 
export default Inputex;