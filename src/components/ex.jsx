import React, { Component } from 'react';

class Ex extends Component {
    state = { 
        arr:['nadav','tommy','adi','tomer'],
        names:[],
        withStyle:true,
        type:'button'
     } 
    render() { 
        return (
            <div> 
           
                { this.state.arr.map(name => <button key={this.state.arr.indexOf(name)} className={this.state.withStyle? this.getclasses(name):'' }  > { name } </button>) }
                <button onClick={this.addName}>add</button>
                <input id='in' type={'text'}  />
                <input  checked={this.state.withStyle} type={'checkbox'} onChange={this.changestyle}/>
                <select name='typeo'  onChange={(e)=>this.changetype(e)}>
                    <option value="button">button</option>
                    <option value="label">label</option>
                    <option value='img'>image</option>
                </select>
                <br/>
                {this.state.names.map(name=>this.generateElemnt(name))}
             
        </div>
    );   

} 

generateElemnt(name){
    switch(this.state.type){
        case 'button':
            return <button key={name} className={this.state.withStyle?this.getclasses(name):''}>(name) </button>
        case 'label':
            return <label key={name} className={this.state.withStyle?this.getclasses(name):''}>(name)</label>


            
        
    
 }
}
changetype=(e)=>{
    this.state.type=e.target.value;
    this.setState({type:this.state.type})

}
changestyle=()=>{
    this.state.withStyle=!this.state.withStyle;
    this.setState({withStyle:this.state.withStyle})


}   
    getclasses(name){//   פונקציה שבודקת אם השם יש לו "איי" מחליט על צבע של הכפתור
        return "btn m-1 btn-" + ((name.includes('a'))?'dark':'primary');
    }
    addDan = () =>{
       this.state.arr.push('dan')
       this.setState({arr:this.state.arr})//  מעדכן את המערך,הדיס.סטייט.ארר זה הערך החדש של המערך עם ה"דן בפנים והסט סטייט זה מה שגורם לו להתעדכן
    }
   addName=()=>{
    let x=document.getElementById("in").value
    this.state.names.push(x)
    this.setState({names:this.state.names})

   }

}

 
export default Ex;