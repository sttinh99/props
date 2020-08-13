import React, { Component } from 'react'
import './menu.css'

class Menu extends Component{
    render()
    {
        return(
            <a href className="block" >
                <i className={this.props.icon}></i>
                <p>{this.props.title}</p>
            </a>
        );
    }
}
export default Menu;