import React from "react";
import {Modal} from "reactstrap"
import APIURL from "../../helpers/environment";
class ModelUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    ModelUpdate = (event) => {
        event.preventDefault();
        let token = localStorage.getItem('token')
        fetch(`${APIURL}/model/${this.props.modelToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({model:{name: this.state.name, notes: this.state.notes, pic: this.state.pic}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).then((res) => {
            
            this.props.updateOff()
        })
        this.props.updateOff()
        this.props.fetchModels()
    }


    render() { 
        return ( <div>
      <Modal className="center" isOpen={true} > 
                <div>
                <form onSubmit={this.ModelUpdate} className="Modelsubmit">
                <label>Miniture Name</label>
                <input onChange={(e) => this.setState({ name : e.target.value})} ></input>
                <label>Notes</label>
                <input onChange={(e) => this.setState({ notes : e.target.value})} ></input>
                               
                <button type="submit">Update Miniture</button>
                <button onClick={()=> this.setState({toggle: false})}>Close</button>
                </form>
                </div>
                </Modal>
        </div> );
    }
}
 
export default ModelUpdate;