import React from "react";
import {
    Modal,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import APIURL from "../../../helpers/environment";

class Mutant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { UpdateSMOn : false }
    }
    toggle = () => {
        if( this.state.UpdateSMOn === false){
            this.setState({UpdateSMOn: true})
        } else {
            this.setState({UpdateSMOn: false})
        }
   }
     UpdateSM = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')
        fetch(`${APIURL}/vault/SM/${this.props.Vault[0].id}`, {
            method: 'PUT',
            body: JSON.stringify({vault:{ SM_CoreBox : this.state.SM_CoreBox, SM_Behemoth : this.state.SM_Behemoth, SM_Skirmishers: this.state.SM_Skirmishers, 
                SM_Overlord : this.state.SM_Overlord, SM_Suicider : this.state.SM_Suicider, SM_Hammer : this.state.SM_Hammer, SM_Avaitor : this.state.SM_Avaitor}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : token
            })
        }).then((res) => {
            this.toggle()
            this.props.fetchvault()
        })
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
        return ( <div>
            <Modal className="center" isOpen={this.state.UpdateSMOn}>
                <Form onSubmit={this.UpdateSM} className="vaultupdate">
                    <FormGroup>
                        <Label>Super Mutants Core Box</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="corebox" onChange={() => this.setState({  SM_CoreBox : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="corebox" onChange={() => this.setState({  SM_CoreBox : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Super Mutants: Behemoth</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="prime" onChange={() => this.setState({  SM_Behemoth : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="prime" onChange={() => this.setState({  SM_Behemoth : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Super Mutants: Skirmishers</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="max" onChange={() => this.setState({  SM_Skirmishers: true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="max" onChange={() => this.setState({  SM_Skirmishers : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Super Mutants: Overlord and Fist</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="danse" onChange={() => this.setState({  SM_Overlord : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="danse" onChange={() => this.setState({  SM_Overlord : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Super Mutants: Suiciders</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="knights" onChange={() => this.setState({ SM_Suicider : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="knights" onChange={() => this.setState({ SM_Suicider : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Super Mutant: Aviator Blister</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="power" onChange={() => this.setState({  SM_Hammer : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="power" onChange={() => this.setState({  SM_Hammer : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Super Mutants: Hammer</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="hammer" onChange={() => this.setState({  SM_Avaitor : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="hammer" onChange={() => this.setState({  SM_Avaitor : false})}></Input>
                    </FormGroup>
                    <input type="submit" />
                    <button onClick={this.toggle}>close</button>
                </Form>
             </Modal>
             <button onClick={this.toggle}>Update Your Super Mutant Collection</button>
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>Super Mutants Core Box</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SM_CoreBox)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Product-Shot-Fallout-Wasteland-Warfare-MUH051239_500x.jpg?v=1631844695" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-super-mutants-core-box">store link</a>
                    <h4>Price: $55.00</h4>
                    <h4>Description</h4>
            
                    <p>
                    Expand your collection with these high quality multi-part 32mm scale resin miniatures of 2 Super Mutant Hounds, 3 Super Mutants, 1 Super Mutant Brute, 1 Super Mutant Master and all the cards you need to play as the Super Mutants faction
                    </p>
                    <ul> Comes With
                        <li>2x Super Mutant Hounds</li>
                        <li>3x Super Mutant</li>
                        <li>1x Super Mutant Brute</li>
                        <li>1x Super Mutant Master</li>
    
                    </ul>
                    <p>This set does not contain cards - Requires the Wave 1 Fundamentals Card Deck</p>
                </div></div>
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>Super Mutants: Behemoth</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SM_Behemoth)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Individual-Behemoth-RGB-150dpi-FWW-MUH051241_500x.jpg?v=1631780932" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-super-mutants-behemoth">store link</a>
                    <h4>Price: $69.00</h4>
                    <h4>Description</h4>
            
                    <p>This WEB ONLY Fallout: Wasteland Warfare set contains 1x 32mm scale high-quality multi-part resin miniature with scenic base. Requires some assembly. Supplied unpainted.
                    </p>
                    <ul> Comes With
                        <li>1x Super Mutant Behemoth</li>
    
                    </ul>
                    <p>Please note - this pack does not contain the cards required to be played with. </p>
                </div></div>
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>Super Mutants: Skirmishers</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SM_Skirmishers)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Painted-Models-Fallout-Wasteland-Warfare-MUH051813_500x.jpg?v=1631844682" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-super-mutants-skirmishers">store link</a>
                    <h4>Price: $27.00</h4>
                    <h4>Description</h4>
            
                    <p>Super Mutants love to hunt and eat. If that means shooting down (mostly) defenceless ‘meat bags’ from afar or blowing their next meal into chunks will explosives, they are happy to do so. Their favourite method of ‘food preparation’ however is to get up close and personal and batter their next meal into submission with whatever comes to hand.
                    </p>
                    <p>Many Super Mutants prefer the ability to smash things and people in a paste or chunks to the relative safety of blasting them apart from range. While their fists are more than a match for most materials, armor plate or faces, the satisfying crunch, crumple or crack of weapon on body is much more enjoyable. Planks of wood, twisted pipes or rusted tool are all favourite, but as long as the food is suitably tenderised and stops moving, they couldn’t be happier. </p>
                   
                    <p>Please note does not include cards</p>
                </div>
                </div>
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>Super Mutants: Overlord and Fist</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SM_Overlord)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Painted-Models-Fallout-Wasteland-Warfare-MUH051814_500x.jpg?v=1631844684" />
                    </div>
                    <div className="vaulcellright">
                   <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-super-mutants-overlord-and-fist-1">store link</a>
                    <h4>Price: $31.00</h4>
                    <h4>Description</h4>
            
                    <p>The largest, meanest, toughest, or just plain ugliest of Super Mutants are also usually the leaders. Those who stand out (even by Super Mutant standards) rise to the ranks of overlords – huge, hulking monsters almost the size of Behemoths and twice as mean. 
                    </p>
                    <p>Towering over the largest suits of power armor, these muscle-bound leaders stomp across the wasteland gathering others of their kind to their cause, which can be anything from ‘get that shiny thing!’ to ‘Eat that fleshy thing’ to ‘smash stuff’. While humans might not see these as rallying cries, Super Mutants see beyond the shouts to the bloodthirsty death dealer beyond. Knowing that following such a beast will almost certainly lead to greater weaponry and more dead things to eat, they are more than happy to do as they are told while the blood flows. </p>
                    <p>Fist is a notable example of an Overlord - equally happy to kill at range or up close. Fist happily mulches the enemy using his minigun, shredding the soon-to-be food with high calibre firepower. All the while he toys with his prey, taunting and goading them into his line of fire. Anyone brave (or more likely foolish) enough to rise to his mocking shouts will be sliced and diced with the same weapon - this time with the vicious spikes and bladed barrels roughly welded to its rotating maw.  </p>
                    </div>
                </div>
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>Super Mutants: Suiciders</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SM_Suicider)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Product-Shot-Fallout-Wasteland-Warfare-MUH051240_500x.jpg?v=1631844681" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-super-mutants-suiciders">store link</a>
                    <h4>Price: $35.00</h4>
                    <h4>Description</h4>
            
                    <p>These Suiciders deliver a powerful punch with their mini nukes!
                    </p>
                    <ul> Comes With
                        <li>3x Super Mutant Suiciders</li>
                    </ul>
                </div>
                </div>
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>Super Mutant: Aviator Blister</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SM_Avaitor)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/e8ee0cAM_500x.jpg?v=1629159365" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-super-mutant-aviator-blister">store link</a>
                    <h4>Price: 	
Sale price$11.00</h4>
                    <h4>Description</h4>
            
                    <p>All Super Mutants are tough, rugged individuals with a taste for meat and bone. But some also have a soft spot for the armor that they wear – not just how much damage it can absorb, but also how warlike and imposing it makes them look. The Aviator cap is much sort after among Super Mutants, and those that have one somehow seem better at thinkin’…
                    </p>
                </div></div>
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>Super Mutants: Hammer</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SM_Hammer)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Group_Box-Hammer-FWW-RGB-150dpi-MUH051242_500x.jpg?v=1631844727" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-super-mutants-hammer">store link</a>
                    <h4>Price: $28.00</h4>
                    <h4>Description</h4>
            
                    <p>Recruit the fearsome Hammer to your Super Mutant force!
                    </p>
                    <ul> Comes With
                        <li>1x Hammer</li>
                        <li>1x Super Mutant Hound</li>
                    </ul>
                    </div>
                </div>
        </div> );
    }
}
 
export default Mutant;