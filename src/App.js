import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'
function App() {
  return (
    <div className="App">
        <Row title = "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title = "Trending now" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
