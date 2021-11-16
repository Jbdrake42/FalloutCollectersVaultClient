import React from "react";

import GalleryTable from "./GalleryTable"

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { models: [],  }
    }
    componentDidMount(){
        this.fetchModels()
      } 
    

      fetchModels = () => {
        let token = localStorage.getItem('token')
        fetch("http://localhost:3000/model/all", {
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
        return ( <div>
            <GalleryTable models={this.state.models} user={this.props.user} />
        </div> );
    }
}
 
export default Gallery;