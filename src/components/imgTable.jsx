import React, { Component } from 'react';
import { getimages} from '../services/imagesTable';
class ImgTable extends Component {
    state = {  images:getimages()} 
    render() { 
        return (
            <div>
                <table className='table'>
                    <tr> 
                 {this.state.images.map((img)=>(
                        <th><img src={img.url} /></th>
                        
                        
                        
                       
                        ))}
                        </tr>
               
                
                
                </table>
            </div>
        );
    }
}
 
export default ImgTable ;