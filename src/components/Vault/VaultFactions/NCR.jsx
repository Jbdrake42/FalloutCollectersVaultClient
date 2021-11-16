import React from "react";
import {
    Modal,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import APIURL from "../../../helpers/environment";
class NCR extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          updateNCROn: false

         }
    }

    UpdateNCR = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')
        fetch(`${APIURL}/vault/${this.props.Vault[0].id}`,{
            method: 'PUT',
            body: JSON.stringify({vault:{ NCR_PromoRanger:this.state.NCR_PromoRanger, NCR_TopBrass: this.state.NCR_TopBrass, NCR_CoreBox: this.state.NCR_CoreBox, NCR_RangerPatrol  : this.state.NCR_RangerPatrol}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : token
            })
        }).then((res) => {
            this.toggle()
            console.log(res)
            this.props.fetchvault()
        })
    }

   toggle = () => {
        if( this.state.updateNCROn === false){
            this.setState({updateNCROn: true})
        } else {
            this.setState({updateNCROn: false})
        }
   }

  
    CheckMarker = (check) => {
        if(check === true){
            return (
                "yes"
                // <img src="https://static.vecteezy.com/system/resources/previews/000/638/544/non_2x/vector-check-list-button-icon.jpg" alt="checkmark" classname="check"/>        
                 )
            }else {
                return(
                    "No"
                    // <img alt="X-mark" className="check" src="https://static.vecteezy.com/system/resources/previews/000/638/755/non_2x/vector-wrong-mark-icon.jpg" />
                )
            }
    }
 


    render() { 
        return <div>
            <Modal className="center" isOpen={this.state.updateNCROn} >
                <Form onSubmit={this.UpdateNCR} className="vaultupdate">
                    <FormGroup>
                        <Label>NCR Core Box</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="corebox" onChange={() => this.setState({  NCR_CoreBox : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="corebox" onChange={() => this.setState({  NCR_CoreBox : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>NCR: Promo NCR Ranger</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="prime" onChange={() => this.setState({  NCR_PromoRanger : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="prime" onChange={() => this.setState({  NCR_PromoRanger : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>NCR: Top Brass</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="max" onChange={() => this.setState({  NCR_TopBrass: true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="max" onChange={() => this.setState({  NCR_TopBrass : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>NCR: Ranger Patrol</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="danse" onChange={() => this.setState({  NCR_RangerPatrol : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="danse" onChange={() => this.setState({  NCR_RangerPatrol : false})}></Input>
                    </FormGroup>
                    <input type="submit" />
                    <button onClick={this.toggle}>close</button>
                </Form>
             </Modal>
             <button onClick={this.toggle}>update your ncr collection</button>
        <div className = "vaultcell">
            <div className="vaultcellleft">
                    <h2>NCR Core Box</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].NCR_CoreBox)} </h3>
                    
                    <img alt="box art here" src="https://cdn.shopify.com/s/files/1/0225/4035/products/BoxGroup-NCR-CoreBox_Mojave_FOWW_RGB-150dpi_500x.jpg?v=1619082468" />
            </div>
            <div className="vaulcellright">
                    <br />
                    <a href="https://www.modiphius.net/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-ncr-core-box">store link</a>
                    <h4>Price: </h4>
                    <h4>Description</h4>
                
                    <p>The New Californian Republic rose from the ashes of the great war to rebuild and rejuvenate swathes of what as the western united states. 
                        Starting from a small trading town, it expanded and grew, and now covers tracts of land all the way up to New Vegas and the Hoover Dam. Their aims are to
                        build and protect, but not all believe in this new system or it’s protectors.  
                        </p>
                    <p>
                    With this in mind the Republic has built up its fighting forces to include rangers and troopers, all 
                    capable warriors with skilled tactical leaders and firepower to boot. They are ambitious, seemingly righteous, 
                    and ready to take on all comers in their fight for the land they see as theirs.
                    </p>
                    <ul> Comes With
                        <li>Veteran Ranger</li>
                        <li>Heavy Trooper</li>
                        <li>2x Patrol Rangers</li>
                        <li>3x Troopers</li>
                        <li>7x scenic bases</li>
                    </ul>
                    <p>The cards for this set are included in the New Vegas Rules Expansion</p>
                    </div>
                </div>
                
               
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>NCR: Promo NCR Ranger</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].NCR_PromoRanger)} </h3>
                    
                    <img alt="box art here" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/NCRRanger_600x.jpg?v=1631837247" />
                   </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-ncr-promo-ncr-ranger">store link</a>
                    <h4>Price: $17.00</h4>
                    <h4>Description</h4>
            
                    <p>
                    In the baking deserts of the Mojave Wasteland only the strong survive. From the east come the hordes of Caesar’s Legion,
                     from the west the hegemonic NCR spread their version of law and order. The sparkling prize of New Vegas lays in the middle, 
                     with only the Hoover Dam in the way.
                    </p>
                    <p>Intelligence, grit, and high-powered weaponry will win the day, and the NCR Rangers bring all three to the fight. Mask set, 
                        duster fluttering in the wind, they stand ready to defend their borders and the glittering jewel of pre-war Nevada. </p>
                        </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2> NCR: Top Brass</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].NCR_TopBrass)} </h3>
                    
                    <img alt="box art here" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/fallout-wasteland-warfare-ncr-top-brass-fallout-wasteland-warfare-modiphius-entertainment-838510_600x.jpg?v=1631844577" />
                   </div>
                   <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-ncr-top-brass">store link</a>
                    <h4>Price: Sale price$28.00</h4>
                    <h4>Description</h4>
            
                    <p>
                    The NCR has created strong military procedure and structure to aid its efforts on the front line. While the commanders themselves come with different attitudes and levels of experience, 
                    they all fight for the good of the NCR. Chief Hanlon is the leader of the Rangers, his explosive tactics being instrumental in the events of the first battle for hoover dam.
                     General Oliver is in charge of the NCR’s Mojave forces. While no lover of Chrief Hanlon or the rangers, he is a staunch support of the NCR’s president and a believer in 
                     military might, even if his application of such is not as expert as he believes. Lt. Gorobets is the leader of the 1st Recon Alpha team. A tough and expert leader, 
                     he cares greatly for the troopers under his command and is not above looking for help from outside sources if it can help them.
                    </p>
                    <ul> Comes With
                        <li>Chief Hanlon</li>
                        <li>General Oliver</li>
                        <li>Lt Gorobets</li>
                        <li>3x scenic bases</li>
                    </ul>
                    </div>
                </div>
                
                    <div className = "vaultcell">
                    <div className="vaultcellleft">
                    <h2>NCR: Ranger Patrol</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].NCR_RangerPatrol)} </h3>
                    
                    <img alt="ncr ranger box" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/fallout-wasteland-warfare-ncr-ranger-patrol-fallout-wasteland-warfare-modiphius-entertainment-345130_600x.jpg?v=1631844578" />
                    <br />
                    </div>
                    <div className="vaulcellright">
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-ncr-ranger-patrol">store link</a>
                    <h4>Price: $45.00</h4>
                    <h4>Description</h4>
                    Rangers are the elite troops of the NCR. Mixing snipers with line troopers and veterans, they are one of the most effective tools in the NCR arsenal, 
                    capable fighters able to hold their own. 
                    They also provide scouts and recon for some of the more dangerous missions that the fighting force undertakes, venturing deep behind enemy lines.
                    <p>
                    </p>
                    <ul> Comes With
                        <li>Civilian Ranger</li>
                        <li>1st Recon Sniper</li>
                        <li>Veteran Ranger</li>
                        <li>2x Troopers</li>
                        <li>5x Scenic base</li>
                    </ul>
                    <p>notes</p>
                    </div>
                </div>
                
            
        </div>
    }
}
 
export default NCR;