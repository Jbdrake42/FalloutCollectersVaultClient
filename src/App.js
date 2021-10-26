
import React from 'react';
import './App.css';
import Header from './components/Site/Header';
import Sidebar from './components/Site/Sidebar';

// import RandomLoot from './components/Tools/RandomLoot'
// import RandomTrader from '../components/Tools/RandomTrader';

class App extends React.Component {
  render() { 
    return <div>
      <Header />
      <Sidebar id="sidebar"/>
    </div>;
  }
}
 
export default App;