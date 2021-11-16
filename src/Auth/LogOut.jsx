
import React from "react";

class LogOut extends React.Component {

    cleartoken = () =>{
        localStorage.clear()
        window.location.reload(false);
      }
    render() { 
        return <div class="logout">
            
            <button onClick={this.cleartoken}>log out</button>
        </div>;
    }
}
 
export default LogOut;