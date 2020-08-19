import React, {Component} from 'react'
import './Bell.css'
class Bell extends Component{
    render(){
        // let className = 'nofication'
        // if(this.props.nofication){
        //     className +=' on'
        // }
        return(
            <i className="far fa-bell"></i>
        )
    }
}
export default Bell;