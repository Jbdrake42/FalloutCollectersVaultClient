import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import Vault from "../Vault/Vault"
import Models from "../Models/Models"
import Tools from "../Tools/Tools"
import Resources from "../Resources/Resource"
import Home from "../Home/Home"

import Blog from "../Blog/Blog";
import {QuoteArray} from "../Quotes/QuoteArray"
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quote: "", quoteActivate : false }
    }

    randomNumber = (min, max) => {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min
        return result
      }

      QuoteatizeMeCaptain=()=>{
        console.log("yo")
        this.setState({ quote: QuoteArray[this.randomNumber(0,49)]})
        this.setState({quoteActivate: true})
    }
    componentDidMount(){
        this.QuoteatizeMeCaptain()
    }
    
    render() { 
        
        return <Router>
            <div className="sidebar">
        <div className="sidebar-list">
            <div className="sidebarbar">
           
           <ul>
               <li><Link to="/home">Home</Link></li>
               <li><Link to="/blog">Blog</Link></li>
               <li><Link to="/vault">Vault</Link></li>
               <li><Link to="/models">Models</Link></li>
               <li><Link to="/tools">Tools</Link></li>
               <li><Link to="/resources">Resources</Link></li>
           </ul>
           {this.state.quoteActivate ? <p class="quote">{this.state.quote}</p> : <></> }
           </div>
        </div>;
       
        
        <div className="sidebar-route">
           
            <Switch>
                <Route path="/home"> <Home QuoteatizeMeCaptain={this.QuoteatizeMeCaptain} /> </Route>
                <Route path="/blog"> <Blog QuoteatizeMeCaptain={this.QuoteatizeMeCaptain}/> </Route>
                <Route path="/vault" ><Vault QuoteatizeMeCaptain={this.QuoteatizeMeCaptain} sessionToken={this.props.sessionToken}/> </Route>
                <Route path="/models" ><Models QuoteatizeMeCaptain={this.QuoteatizeMeCaptain} sessionToken={this.props.sessionToken} /> </Route>
                <Route path="/tools" ><Tools QuoteatizeMeCaptain={this.QuoteatizeMeCaptain} /> </Route>
                <Route path="/resources" ><Resources QuoteatizeMeCaptain={this.QuoteatizeMeCaptain} /> </Route>
                <Redirect to="/home" />
            </Switch>

        </div>
        
        </div>
        </Router>
       
    }
}
 
export default Sidebar;