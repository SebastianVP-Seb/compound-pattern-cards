import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompoundPattern from './Page/CompoundPattern';
// import { init } from './types';

function App() {

  // init();

  return (
    <div className="App">
      <aside className="app_aside">
        <img src={logo} className="App-logo" alt="logo" />
      </aside>
      <main>
        <h1>iAmSebastian Compound Pattern TypeScript</h1>
        <CompoundPattern />
      </main>

    </div>
  );
}

export default App;
