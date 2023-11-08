import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import RecommendedVideo from './components/RecommendedVideo';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/* <h1>JAI SHREE RAM</h1> */}
    <Router>
    <Header/>
      <Switch>
        <Route path='/search/:searchTerm'>
        <div className='app__page'>
            <Sidebar/>
           <SearchPage/>
             </div>
        </Route>
        <Route path='/'>
         <div className='app__page'>
            <Sidebar/>
           <RecommendedVideo/>
             </div>
        </Route>
      </Switch>
    </Router>
  
    
    </div>
  );
}

export default App;
