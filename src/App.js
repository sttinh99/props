import React, { Component } from 'react'
import './App.css';
import Menu from './components/Menu'

class App extends Component {
  constructor(){
    super();
    this.items=[
      {icon:"fas fa-home" ,title:"HOME"},
      {icon:"fas fa-gift" ,title:"DEALS"},
      {icon:"fas fa-cloud-upload-alt" ,title:"UPLOAD"},
      {icon:"fas fa-coffee", title:"WORK"},
      {icon:"fas fa-cog" ,title:"SETTING"}
    ]
  }
  render(){
    return (
      <div className="App">
        {
          this.items.map((x,i)=> <Menu icon={x.icon} key={i} title={x.title}  />)
        }
      </div>
    );
  }
}
export default App;
