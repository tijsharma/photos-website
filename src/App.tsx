// import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <img src={'https://drive.google.com/uc?export=view&id=11GghijJOwDaYMK8QvZg4kqz18M7KPggX'} alt="Test" /> */}
          <img src={require('./test.jpg')} alt="Test" />
        </div>
      </header>
    </div>
  );
}

export default App;


/*
GET https://www.googleapis.com/drive/v3/files
files.list
*/
