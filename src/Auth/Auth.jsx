import React from "react";
import Register from "./Register";
import Login from "./Login";
import LogOut from "./LogOut";


class Auth extends React.Component {





    loggedIn = () => {
        return (this.props.sessionToken === localStorage.getItem('token') ? <LogOut clear={this.props.clear}/>
  : <div>
      <Login updateToken={this.props.updateToken}  />
      <Register updateToken={this.props.updateToken} />
  </div>)
    }
    render() { 
        return <div className="auth">
           {this.loggedIn()}
        </div>;
    }
}
 
export default Auth;