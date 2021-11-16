import React from "react";
import { FormGroup, Modal } from "reactstrap";
import BlogCards from "./BlogTable";
import BlogUpdate from "./BlogUpdate";
import APIURL from "../../helpers/environment";
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false, blogs: [],title : "", subtitle : "", blog: "", notes: "", updateActive: false, blogToUpdate: {} }
    }
    componentDidMount(){
        this.fetchBlog()
        this.props.QuoteatizeMeCaptain()
      } 
      
    updateOn = () => {
        this.setState({updateActive: true })
    }

    updateOff = () =>{
        this.setState({updateActive: false })
    }

    fetchBlog = async() => {
        
        let token = localStorage.getItem('token')
        fetch(`${APIURL}/blog/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).then ((res) => res.json())
        .then((Data) => {
            this.setState({blogs:Data})
            console.log(Data)
        })}
        CreateBlog = (e) => {
            let token = localStorage.getItem('token')
            this.setState({toggle: false})
            e.preventDefault()
            fetch(`${APIURL}/blog/`, {
                method: "POST",
                body: JSON.stringify({blog:{title: this.state.title, subtitle: this.state.subtitle, author: localStorage.getItem("email"), blog : this.state.blog,  notes : this.state.notes }}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                })
            }).then(
            (response) => response.json()
            ).then((data) => {
                console.log(data)
                this.fetchBlog()
            })
        }
        toggle = () => {this.setState({toggle: this.toggle })}
        updateOn = () => {
            this.setState({updateActive: true })
        }
    
        updateOff = () =>{
            this.setState({updateActive: false })
        }
    
        editUpdateblog = (blog) => {
            this.setState({blogToUpdate: blog})
            console.log(blog)
        }

    render() { 
        return ( <div className="blog">
            <div className="resourceHeader">
            <h1>Blog</h1>
            </div>
            <button onClick={() => this.setState({toggle: true})}> Enter a new Blog </button>
                <Modal className="center" isOpen={this.state.toggle} > 
                <div>
                <form onSubmit={this.CreateBlog} className="Modelsubmit">
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
                </FormGroup>
                <FormGroup>
                <textarea  rows="4" cols="50" onChange={(e) => this.setState({ blog : e.target.value})}  > </textarea>
                
                </FormGroup>
                <FormGroup>
                <label>notes</label>
                <input onChange={(e) => this.setState({ notes : e.target.value})} ></input>
                </FormGroup>
                <button type="submit">Save Blog</button>
                <button onClick={()=> this.setState({toggle: false})}>Close</button>
                </form>
                </div>
                </Modal>
                <BlogCards fetchBlog={this.fetchBlog} blogs={this.state.blogs} editUpdateBlog={this.editUpdateblog} updateOn={this.updateOn}  />
                
                {this.state.updateActive ? <BlogUpdate fetchBlog={this.fetchBlog} blogToUpdate={this.state.blogToUpdate} updateOff={this.updateOff}/> : <> </>}
            </div>
         );
    }
}
 
export default Blog;