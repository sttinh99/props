import React from 'react';
import './App.css';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <div className="Menu">
          <Menu icon="fas fa-home" title="HOME"/>
          <Menu icon="fas fa-gift" title="DEALS"/>
          <Menu icon="fas fa-cloud-upload-alt" title="UPLOAD"/>
          <Menu icon="fas fa-coffee" title="WORK"/>
          <Menu icon="fas fa-cog" title="SETTING"/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
