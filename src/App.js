import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideo from './components/RecommendedVideo';

function App() {
  return (
    <div className="App">
    {/* <h1>JAI SHREE RAM</h1> */}
    <Header/>
    
    <div className='app__page'>
      <Sidebar/>
      <RecommendedVideo/>
    </div>
    
    </div>
  );
}

export default App;
