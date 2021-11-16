import React from "react";
import { Button, FormGroup, Modal } from "reactstrap";
class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {email: "", username: "", password: "", role: "user", toggle: false }
    }

    CreateVault = () => {
        let token = localStorage.getItem('token')
        fetch("http://localhost:3000/vault/", {
            method: "Post",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : token
            })
        }).then (
            console.log("vaultcreated")
        )
    }
    AdminChecker = (e) => {
        console.log(e)
        if(e === "password"){
            this.setState({role: "admin"})
            
        } else {
            this.setState({role: "user"})
            
        }
        console.log(this.state.role)
    }

    toggle = () => {
        if(this.state.toggle === true){
            this.setState({toggle: false })
        } else {
            this.setState({toggle: true })
        }
    }

    createUser = async(e) =>{
        e.preventDefault()
        console.log(this.state.email, this.state.password, this.state.admin)
    
        
        await fetch("http://localhost:3000/user/register", {
            method: "POST",
            body: JSON.stringify({user:{email: this.state.email, username: this.state.username, password: this.state.password, role: this.state.role}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
        (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
            localStorage.setItem('role', data.user.role)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("username", data.user.username)
        })
        this.CreateVault()
    }
    
    render() { 
        return ( <div>
            <Button onClick={this.toggle} >Register</Button>
            <Modal className="center"  isOpen={this.state.toggle}>
                <form onSubmit={this.createUser}>
                <FormGroup>
                    <label >email</label>
                    <input onChange={(e) => this.setState({ email : e.target.value})} name="email"  ></input>
                </FormGroup>
                <FormGroup>
                    <label >User Name</label>
                    <input onChange={(e) => this.setState({ username : e.target.value})} name="username"  ></input>
                </FormGroup>
                <FormGroup>
                    <label>password</label>
                    <input onChange={(e) => this.setState({ password : e.target.value})} ></input>
                </FormGroup>
                <FormGroup>
                    <label>Admin application </label>
                    <input onChange={(e) => this.AdminChecker(e.target.value.toString())} />
                    
                </FormGroup>
                <button type="submit">Register</button>
                </form>
                </Modal>
            </div>
         );
    }
}
 
export default Register;