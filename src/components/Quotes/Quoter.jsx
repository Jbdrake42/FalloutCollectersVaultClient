import React from "react";
import {QuoteArray} from "./QuoteArray"
class Quoter extends React.Component {
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
    render() { 
        return ( 
            <div>
            <button onClick={this.QuoteatizeMeCaptain}> quote </button>
            {this.state.quoteActivate ? <p class="quote"><h3>Inspiration</h3>{this.state.quote}</p> : <></> }
            </div>
         );
    }
}
 
export default Quoter;