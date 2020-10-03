import React from 'react';
import ReactDOM from 'react-dom';
import JobsList from './JobsList';
// import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Jobs</h1>
        <JobsList />
      </div>
  );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;