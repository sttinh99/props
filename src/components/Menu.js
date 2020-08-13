import React, { Component } from 'react'
import './menu.css'

class Menu extends Component{
    render()
    {
        return(
            <a href className="block" >
                <i className={this.props.items[0].icon}></i>
                <p>{this.props.items[0].title}</p>
            </a>
        );
    }
}
export default Menu;