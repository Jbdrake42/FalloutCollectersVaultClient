import React from "react";
import RandomLoot from "./RandomLoot";
import RandomTrader2 from "./RandomTrader2";

class Tools extends React.Component {
    componentDidMount(){
        this.props.QuoteatizeMeCaptain()
    }
    render() { 
        return (
            
        <div className="Tool">
            <div className="resourceHeader">
            <h1>Tools</h1>
            </div>
            <RandomLoot />
            <RandomTrader2 />
        </div>)
    }
}
 
export default Tools;