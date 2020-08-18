import React, { Component } from 'react'
import './menu.css'

class Menu extends Component{
    constructor(){
        super();
        this.Items = [
            {icon:"fas fa-home" ,title:"HOME"},
            {icon:"fas fa-gift" ,title:"DEALS"},
            {icon:"fas fa-cloud-upload-alt" ,title:"UPLOAD"},
            {icon:"fas fa-coffee", title:"WORK"},
            {icon:"fas fa-cog" ,title:"SETTING"}
          ]
    }
    render()
    {    
        return(
        <a href="https://facebook.com" className='block'>{
            // this.props.items.map(x=>
            //     <div className="block-item">
            //         <li className={x.icon}></li>
            //         <p>{x.title}</p>
            //     </div>)
            // }
                <div className="block-item">
                    <li className={this.props.icon}></li>
                    <p>{this.props.title}</p>
                </div>
        }
        </a>
        );
    }
}
export default Menu;