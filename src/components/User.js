import React, { Component } from 'react'
class User extends Component{
    render(){
        const listUser = this.props.listUser;
        return(
            <tbody>
                {
                    listUser.map((x, index)=>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.hadle}</td>
                        </tr>
                    )}
            </tbody>
        )
    }
}
export default User;