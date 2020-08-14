import React, { Component } from 'react'
import './menu.css'

class Menu extends Component{
    render()
    {   
        const items = this.props.items;
        const lists = items.map(x=>{
            console.log(x);
            return  (
                <div className="block-item">
                    <li className={x.icon}></li>
                    <p>{x.title}</p>
                </div>
            )
        })
        return(
        <a href className='block'>{lists}</a>
        );
    }
}
export default Menu;