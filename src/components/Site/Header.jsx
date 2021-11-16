import React from "react";
import Auth from "../../Auth/Auth";


class Header extends React.Component {
    render() { 
        return <header className="header">
            <div className="header-barbar">
            <img className="headerimg" alt="site logo here" src="https://fontmeme.com/permalink/211113/bfaa32812a04e52279c5be6bf32a54e6.png"/>
           
            <Auth className="auth" updateToken={this.props.updateToken} sessionToken={this.props.sessionToken} clear={this.props.clear} />
            </div>
        </header>;
    }
}
 
export default Header;