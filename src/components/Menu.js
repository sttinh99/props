import React, { Component } from 'react'
import './menu.css'

class Menu extends Component{
    render()
    {    
        return(
        <a href className='block'>{this.props.items.map(x=>
                <div className="block-item">
                    <li className={x.icon}></li>
                    <p>{x.title}</p>
                </div>)}</a>
        );
    }
}
export default Menu;