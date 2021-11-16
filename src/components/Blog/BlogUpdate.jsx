import React from "react";
import { FormGroup, Modal } from "reactstrap";


class BlogUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  title: "", subtitle: "",  }
    }
    updateBlog = (e) => {
        let token = localStorage.getItem('token')
        this.setState({toggle: false})
        e.preventDefault()
        fetch(`http://localhost:3000/blog/${this.props.blogToUpdate.id}`, {
            method: "put",
            body: JSON.stringify({blog:{title: this.state.title, subtitle: this.state.subtitle, author: localStorage.getItem("email"), blog : this.state.blog,  notes : this.state.notes }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).then(
        (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.props.fetchBlog()
            this.props.updateOff()
        })
    }
    render() { 
        return ( 
            <div>
                <Modal className="center" isOpen={true} > 
                <div>
                <form onSubmit={this.updateBlog} className="Modelsubmit">
                    <FormGroup>
                <label>Blog Title</label>
                <input onChange={(e) => this.setState({ title : e.target.value})} ></input>
                </FormGroup>
                <FormGroup>
                <label>Subtitle</label>
                <input onChange={(e) => this.setState({ subtitle : e.target.value})} ></input>
                </FormGroup>
                
                <FormGroup>
                <label>Blog Body</label>
                <input className="blogBody" onChange={(e) => this.setState({ blog : e.target.value})} ></input>
                </FormGroup>
                <FormGroup>
                <label>notes</label>
                <input onChange={(e) => this.setState({ notes : e.target.value})} ></input>
                </FormGroup>
                <button type="submit">Update</button>
                <button onClick={()=> {this.props.updateOff()}}>Close</button>
                </form>
                </div>
                </Modal>
            </div>
         );
    }
}
 
export default BlogUpdate