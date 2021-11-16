import React from "react";
import {
    Card,
    Button,
    CardBody,
    CardTitle,
    CardText,
    CardImg
  } from "reactstrap";
import APIURL from "../../helpers/environment";
const ModelTable = (props) => {
   
   function deleteModel(model) {
    let token = localStorage.getItem('token')
        fetch(`${APIURL}/${model.id}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        })
        props.fetchModels()
    }

    function ModelMapper() {
        return props.models.map((model, index) => {
            return(
                <Card className="card" key={index}>
        <CardBody>
        <CardTitle><h3>{model.name}</h3></CardTitle>
            <CardImg src={model.pic} className="modelimg" />
          
          <CardTitle>painted by {model.painter}</CardTitle>
          <CardText className="CardText">{model.notes}</CardText>
          <Button onClick={() => (deleteModel(model))}>delete</Button>
          <Button onClick={() => {props.editUpdatemodel(model); props.updateOn()}}>update</Button>
        </CardBody>
      </Card>
            )
        })
    }
    return ( <div className="cardWrapper">
        
        {ModelMapper()}
        
    </div> ); 
    
}
export default ModelTable;
