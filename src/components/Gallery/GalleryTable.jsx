import React from "react";
import APIURL from "../../helpers/environment";
import {
    Card,
    Button,
    CardBody,
    CardTitle,
    CardText,
    CardImg
  } from "reactstrap";


const GalleryTable = (props) => {
   
   function deleteModel(model) {
    let token = localStorage.getItem('token')
        fetch(`${APIURL}/model/admin/${model.id}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        })
    }

    function ModelMapper() {
        return props.models.map((model, index) => {
            const adminchecker = () => {
                if(localStorage.getItem("role") === "admin"){
                    return (<>
                        <Button onClick={() => (deleteModel(model))}>Admin delete</Button>
                        </>
                    )
                }else {
                    return(
                        <></>
                    )
                }
            }
            return(
                <Card className="card" key={index}>
        <CardBody>
        <CardTitle><h3>{model.name}</h3></CardTitle>
            <CardImg src={model.pic} className="modelimg" />
            <CardTitle>painted by {model.painter}</CardTitle>
          <CardText className="CardText" >{model.notes}</CardText>
          {adminchecker()}
          
        </CardBody>
      </Card>
            )
        })
    }
    return ( <div className="cardWrapper">
        
        {ModelMapper()}
        
    </div> ); 
    
}
export default GalleryTable;
