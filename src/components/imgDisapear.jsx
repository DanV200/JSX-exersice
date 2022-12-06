import React, { Component } from 'react';
class Imgdisapear  extends Component {
    state = { 
        img:'https://picsum.photos/300',
        count:0
     } 
     style={
       height:'400px',
       width:'400px',
       backgroundColor:'green'


     }

    render() { 
        return (
                <div style={this.style} onClick={this.hideImg}>
                    <img src={this.state.img}/>
                </div>
        );
    }
    hideImg=()=>{
        if(this.state.count%2==0){
            this.setState({img:'https://picsum.photos/300'})
            this.state.count++
        }
        else{
            this.setState({img:null})
            this.state.count++
        }
    }
}
 
export default Imgdisapear ;