
import React from 'react';
import './App.css';
import Header from './components/Site/Header';
import Sidebar from './components/Site/Sidebar';
// import Register from "../src/Auth/Register"
// import Login from "../src/Auth/Login";
// import LogOut from "../src/Auth/LogOut";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sessionToken: "" }
}

componentDidMount(){
  if (localStorage.getItem('token')){
    this.setState({sessionToken: localStorage.getItem('token')})
  } 
}

clearToken = () =>{
  localStorage.clear()
  this.setState({sessionToken: ""})
}

updateToken = (newToken) => {
  localStorage.setItem('token', newToken)
  this.setState({sessionToken: newToken})
  console.log(this.state.sessionToken)
}

cleartoken = () =>{
  localStorage.clear()
  this.setState({SessionToken: ""})
}



  render() { 
    return <div className="app">
      <Header sessionToken={this.state.sessionToken} updateToken={this.updateToken} clear={this.clearToken}  />
      <Sidebar sessionToken={this.state.sessionToken} />

    </div>;
  }
}
 
export default App;