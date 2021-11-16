import React from "react";
import { Button, FormGroup, Modal } from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", username: "", toggle: false }
    }

    createUser = async(e) =>{
        e.preventDefault()
        console.log(this.state.email, this.state.password,)
    
        
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            body: JSON.stringify({user:{email: this.state.email, password: this.state.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
        (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.props.updateToken(data.sessionToken)
            console.log(data.user.role)
            localStorage.setItem('role', data.user.role)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("username", data.user.username)
        })
    }
    toggle = () => {
        if(this.state.toggle === true){
            this.setState({toggle: false })
        } else {
            this.setState({toggle: true })
        }
    }



    render() { 
        return <div>
            <Button onClick={this.toggle} >Login</Button>
            <Modal centered className="center" isOpen={this.state.toggle}>
             <form onSubmit={this.createUser}>
                 <FormGroup>
                    <label >email</label>
                    <input onChange={(e) => this.setState({ email : e.target.value})} name="email"  ></input>
                </FormGroup>
                <FormGroup>
                    <label>password</label>
                    <input onChange={(e) => this.setState({ password : e.target.value})} ></input>
                    <button type="submit">Login</button>
                </FormGroup>
                </form>
                </Modal>
        </div>;
    }
}
 
export default Login;