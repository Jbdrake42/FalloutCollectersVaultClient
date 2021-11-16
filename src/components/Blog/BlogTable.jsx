import React from "react";
import APIURL from "../../helpers/environment";

  class BlogCards extends React.Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }

       deleteBlog=(model)=> {
        let token = localStorage.getItem('token')
            fetch(`${APIURL}/blog/${model.id}`,{
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                })
                
            })
            this.props.fetchBlog()
        }
     BlogMapper() {
            return this.props.blogs.map((blog, index) => {
                return(
                  <div className="blogBody">
                      <h1>{blog.title}</h1>
                      <h3>{blog.subtitle}</h3>
                      <h4 className="blogtop">written by: {blog.author}</h4>
                      <p>{blog.blogbody}</p>
                      <p>{blog.notes}</p>
                      {localStorage.getItem("role")=== "admin" ? <button onClick={() => {this.deleteBlog(blog)}}>delete blog</button> : <></>}
                      {localStorage.getItem("role")=== "admin" ? <button onClick={() => {this.props.editUpdateBlog(blog); this.props.updateOn()}}>edit blog</button> : <></>}
                  </div>
                )})}

      render() { 
          return ( <div>
              {this.BlogMapper()}
            </div> );
      }
  }
   
  export default BlogCards;
