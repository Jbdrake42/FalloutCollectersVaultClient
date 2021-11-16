import React from "react";
import NCR from "./VaultFactions/NCR";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import Survivors from "./VaultFactions/Survivors";
import BOS from "./VaultFactions/BOS"
import Mutant from "./VaultFactions/Mutant"
import VaultHome from "./VaultHome";



class Vault extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Vault: [],

         }
    }
    componentDidMount(){
        this.fetchNCR()
         this.props.QuoteatizeMeCaptain()
    }

   
    fetchNCR = () => {
        fetch("http://localhost:3000/vault/", {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }) 
        .then((res) => res.json())
        .then((Data) => {
            this.setState({Vault:Data})
            console.log(Data)
            console.log(Data)
        })
    }

  
    render() { 
        return (
        
        <Router>
            <div className="vaultbar">
            <div className="vaultChild"> 
            <Link to="/overview"><h1>Faction Overview</h1></Link>
            </div>
            <div className="vaultChild"> 
            <Link to="/suvive"><h1>Survivors</h1></Link>
            </div>
            <div className="vaultChild"> 
            <Link to="/bos"><h1>Brotherhood of Steel</h1></Link>
            </div>
            <div className="vaultChild"> 
            <Link to="/sm"><h1>Supermutants</h1></Link>
            </div>
            <div className="vaultChild"> 
            <Link to="/ncr"> <h1>New California Republic</h1></Link>
            </div>
            </div>
            <Switch>
                <Route path="/suvive"><Survivors fetchvault={this.fetchNCR} sessionToken={this.props.sessionToken} Vault={this.state.Vault} />  </Route>
                <Route path="/bos"> <BOS fetchvault={this.fetchNCR} sessionToken={this.props.sessionToken} Vault={this.state.Vault}/>  </Route>
                <Route path="/ncr"> <NCR fetchvault={this.fetchNCR} Vault={this.state.Vault} sessionToken={this.props.sessionToken}/> </Route>
                <Route path="/sm"> <Mutant fetchvault={this.fetchNCR} sessionToken={this.props.sessionToken} Vault={this.state.Vault}/>  </Route>
                <Route path="/overview"> <VaultHome /></Route>
                <Redirect to="/overview"></Redirect>
                
              
            </Switch>

        </Router>
    )}
}
 
export default Vault;