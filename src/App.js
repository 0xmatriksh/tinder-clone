import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      {/*HEader */}
      <Header/>
      {/*Tinder Cards */}
      <TinderCards/>
      {/*SwipeButtons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
