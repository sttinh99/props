import React, { Component } from 'react'
import './User.css'

class User extends Component{
    render(){
   //     const listUser = this.props.listUser;
        let className = 'fillBackground'
        if(parseInt(this.props.th)%2!==0)
        {
            className += ' fill';
        }
        return(
            <tr className={className}>
                <td>{this.props.th}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.hadle}</td>
            </tr>
        )
    }
}
export default User;