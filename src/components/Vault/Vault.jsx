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
            <Link to="/overview"><h5>Faction Overview</h5></Link>
            </div>
            <div className="vaultChild"> 
            <Link to="/suvive"><h5>Survivors</h5></Link>
            </div>
            <div className="vaultChild"> 
            <Link to="/bos"><h5>Brotherhood of Steel</h5></Link>
            </div>
            <div className="vaultChild"> 
            <Link to="/sm"><h5>Supermutants</h5></Link>
            </div>
            <div className="vaultChild"> 
            <Link to="/ncr"> <h5>New California Republic</h5></Link>
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