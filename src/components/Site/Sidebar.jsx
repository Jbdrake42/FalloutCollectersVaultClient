import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Vault from "../Vault/Vault"
import Models from "../Models/Models"
import Tools from "../Tools/Tools"
import Resources from "../Resources/Resource"
class Sidebar extends React.Component {
    render() { 
        
        return <Router>
            <div className="sidebar">
        <div className="sidebar-list">
           <h1> hello from sidebar</h1>
           <ul>
               <li><Link to="/vault">Vault</Link></li>
               <li><Link to="/models">Models</Link></li>
               <li><Link to="/tools">Tools</Link></li>
               <li><Link to="/resources">Resources</Link></li>
           </ul>
        </div>;
        <div className="sidebar-route">
           
            <Switch>
                <Route path="/vault" ><Vault /> </Route>
                <Route path="/models" ><Models /> </Route>
                <Route path="/tools" ><Tools /> </Route>
                <Route path="/resources" ><Resources /> </Route>
            </Switch>
           
        </div>
        </div>
        </Router>
       
    }
}
 
export default Sidebar;