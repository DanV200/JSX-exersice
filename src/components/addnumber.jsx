import React, { Component } from 'react';
class Addnumber extends Component {
    state = {
        firstnum:null,
        secondnum:null,
        result:null,
        sign:null

      } ;
    render() { 
        return (
        <div>
                <input type="text" onChange={(e) => (this.state.firstnum = e.target.value)}  name="in" placeholder='enter first number'/> 
                <input type="text" onChange={(e)=>(this.state.sign=e.target.value)} name="math"  placeholder='enter +/-/*'/>
                <input type="text" onChange={(e) => (this.state.secondnum = e.target.value)} name="in2" placeholder='enter second number'/>
                 <button onClick={this.math} className='btn btn-primary'> calculate</button>
                 <br/>
                 <button className='btn btn-warning'> your result is:{this.state.result}</button>
        </div>
        );
    }
   math=()=>{
    switch(this.state.sign){
        case '+':
            this.state.result=Number(this.state.firstnum)+Number(this.state.secondnum)
            this.setState({result:this.state.result})
            
            break;
            case '-':
                this.state.result=Number(this.state.firstnum)-Number(this.state.secondnum)
                this.setState({result:this.state.result})
                
                break;
                case '*':
                    this.state.result=Number(this.state.firstnum)*Number(this.state.secondnum)
                    this.setState({result:this.state.result})
                   
                    break;

    }
   }
}
 
export default Addnumber ;