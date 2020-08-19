import React, {Component} from 'react'
import './Bell.css'
class Bell extends Component{
    render(){
        const nofication = this.props.hasUnread;
        let className = 'nofication'
        if(nofication){
            className +=' on'
        }
        return(
            <div className="bell">
                <div className = {className}></div>
                <i className="far fa-bell"></i>
            </div>
        )
    }
}
export default Bell;