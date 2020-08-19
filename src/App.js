import React, { Component } from 'react'
import './App.css';
// import Menu from './components/Menu'
import Bell from './components/Bell'
import User from './components/User'

class App extends Component {
  constructor(){
    super();
    this.items=[
      {icon:"fas fa-home" ,title:"HOME"},
      {icon:"fas fa-gift" ,title:"DEALS"},
      {icon:"fas fa-cloud-upload-alt" ,title:"UPLOAD"},
      {icon:"fas fa-coffee", title:"WORK"},
      {icon:"fas fa-cog" ,title:"SETTING"}
    ];
    this.listUser = [
      {firstName: "Trương", lastName: "Tịnh", hadle: 'T'},
      {firstName: "Phạm", lastName: "Bảo", hadle: 'T'},
      {firstName: "Vy", lastName: "Hòa", hadle: 'T'},
      {firstName: "Ngô", lastName: "Hải", hadle: 'T'}
    ];
    this.nofication = true
  }
  render(){
    return (
      <div className="App">
        {<Bell hasUnread={this.nofication}/>}
        {
          // this.items.map((x,i)=> <Menu icon={x.icon} key={i} title={x.title}  />)
          <table className='table'>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {this.listUser.map((x,i)=> <User firstName={x.firstName} hadle={x.hadle} key={i} th={i+1} lastName={x.lastName}/>)}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
export default App;
