import React, { Component } from 'react'
class User extends Component{
    render(){
        const listUser = this.props.listUser;
        return(
            <tr>
                {
                    listUser.map((x)=>
                       <td>{x.firstName}</td>)
                }
            </tr>
        )
    }
}
export default User;