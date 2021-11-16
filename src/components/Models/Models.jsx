import React from "react";
import ModelUpdate from './ModelUpdate'
import { FormGroup, Modal } from "reactstrap";
import ModelTable from "./ModelTable";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import Gallery from "../Gallery/Gallery";
import APIURL from "../../helpers/environment";
class Models extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false, toggle2: false, models: [], loading: false, image: "", updateActive: false, modelToUpdate: {},user: [], notes: ""}
    }
    toggle = () => {this.setState({toggle: this.toggle })}
    componentDidMount(){
      this.fetchModels()
      this.fetchUser()
      this.props.QuoteatizeMeCaptain()
    } 
    
    fetchUser = () => {
        let token = localStorage.getItem('token')
        fetch(`${APIURL}/user/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).then ((res) => res.json())
        .then((Data) => {
            this.setState({user:Data})
            console.log(Data)
        })}
    upload = async(e) => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset","FWWVault")
        
        const res = await fetch (
            "https://api.cloudinary.com/v1_1/dsipqxdgm/image/upload",{
                method: "POST",
                body : data,
            }
        )
        const File = await res.json()
        await this.setState({pic: File.secure_url})
        console.log(File)
        await this.setState({loading: true})
    }
    CreateModel = (e) => {
        let token = localStorage.getItem('token')
        this.setState({toggle: false})
        e.preventDefault()
        fetch(`${APIURL}/model/`, {
            method: "POST",
            body: JSON.stringify({model:{name: this.state.name,painter: localStorage.getItem("username"), notes: this.state.notes, pic: this.state.pic}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).then(
        (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.fetchModels()
        })
        this.setState({loading: false})
    }
    
    updateOn = () => {
        this.setState({updateActive: true })
    }

    updateOff = () =>{
        this.setState({updateActive: false })
    }

    editUpdatemodel = (model) => {
        this.setState({modelToUpdate: model})
        console.log(model)
    }
    fetchModels = async() => {
        
        let token = localStorage.getItem('token')
        fetch(`${APIURL}/model/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).then ((res) => res.json())
        .then((Data) => {
            this.setState({models:Data})
            console.log(Data)
        })}
   
    render() { 
        return <div className="models">
            
            
            
            <Router>
                
                <div className="vaultbar">
                <div className="vaultChild">
            <Link to="/model"><h1>Your Models</h1></Link>
                </div>
                <div className="vaultChild">
            <button onClick={() => this.setState({toggle: true})}> Log a new model </button>
            </div>
            <div className="vaultChild">
            <Link to="/gallery"><h1>The Gallery</h1></Link>
            </div>
            
            </div>
            <Switch>
                <Route path="/model"> <ModelTable fetchModels={this.fetchModels} models={this.state.models} sessionToken={this.props.sessionToken} updateOn={this.updateOn} editUpdatemodel={this.editUpdatemodel} /></Route>
                <Route path="/gallery"> <Gallery user={this.state.user} /> </Route>
                <Redirect to="/model" />
            </Switch>
            </Router>
            <div>
                <Modal className="center" isOpen={this.state.toggle} > 
                <div>
                <form onSubmit={this.CreateModel} className="Modelsubmit">
                    <FormGroup>
                <label>Miniture Name</label>
                <input onChange={(e) => this.setState({ name : e.target.value})} ></input>
                </FormGroup>
                <FormGroup>
                <label>Notes</label>
                <textarea onChange={(e) => this.setState({ notes : e.target.value})} name="w3review" rows="4" cols="50"> </textarea>
                
                </FormGroup>
                <FormGroup>
                <label>picture</label>
                
                <input type="file" name="file" placeholder= "Upload image here" onChange={this.upload} ></input>
                <img className="modellogpick" alt="" src={this.state.pic} />
                {this.state.loading ? <button type="submit">Save miniture</button> : <></>}
                </FormGroup>
                <button onClick={()=> this.setState({toggle: false})}>Close</button>
                </form>
                </div>
                </Modal>
            </div>
           
            {this.state.updateActive ? <ModelUpdate fetchModels={this.fetchModels} modelToUpdate={this.state.modelToUpdate} updateOff={this.updateOff} token={this.props.sessionToken}  /> : <> </>}
        </div>;
    }
}
 
export default Models;