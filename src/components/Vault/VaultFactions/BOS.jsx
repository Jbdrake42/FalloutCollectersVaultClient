import React from "react";
import {
    Modal,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import APIURL from "../../../helpers/environment";
class BOS extends React.Component {
    constructor(props) {
        super(props);
        this.state = { updateBOSOn: false
        }
    }
    toggle = () => {
        if( this.state.updateBOSOn === false){
            this.setState({updateBOSOn: true})
        } else {
            this.setState({updateBOSOn: false})
        }
   }
   UpdateBOS = (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token')
    fetch(`${APIURL}/vault/${this.props.Vault[0].id}`,{
        method: 'PUT',
        body: JSON.stringify({vault:{ BOS_CoreBox:this.state.BOS_CoreBox, BOS_Liberty_Prime: this.state.BOS_Liberty_Prime, NCR_BOS_ElderMaxon: this.state.BOS_ElderMaxon, 
            BOS_Cade_Danse  : this.state.BOS_Cade_Danse, BOS_FrontLine  : this.state.BOS_FrontLine, BOS_PowerArmor1  : this.state.BOS_PowerArmor1}}),
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
              
              
                <Modal isOpen={this.state.updateBOSOn}>
                <Form onSubmit={this.UpdateBOS} className="vaultupdate">
                    <FormGroup>
                        <Label>Brotherhood of Steel Core Game Box</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="corebox" onChange={() => this.setState({  BOS_CoreBox : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="corebox" onChange={() => this.setState({  BOS_CoreBox : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Brotherhood of Steel: Liberty Prime</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="prime" onChange={() => this.setState({  BOS_Liberty_Prime : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="prime" onChange={() => this.setState({  BOS_Liberty_Prime : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Brotherhood of Steel: Elder Maxson and Captain Kells</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="max" onChange={() => this.setState({  BOS_ElderMaxon: true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="max" onChange={() => this.setState({  BOS_ElderMaxon : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Brotherhood of Steel: Knight-Captain Cade and Paladin Danse</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="danse" onChange={() => this.setState({  BOS_Cade_Danse : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="danse" onChange={() => this.setState({  BOS_Cade_Danse : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Brotherhood of Steel: Frontline Knights</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="knights" onChange={() => this.setState({ BOS_FrontLine : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="knights" onChange={() => this.setState({  BOS_FrontLine: false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Brotherhood of Steel Power Armor 1</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="power" onChange={() => this.setState({  BOS_PowerArmor1 : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="power" onChange={() => this.setState({  BOS_PowerArmor1 : false})}></Input>
                    </FormGroup>
                    <input type="submit" />
                    <button onClick={this.toggle}>close</button>
                </Form>
             </Modal>
             <button  onClick={this.toggle}>update your ncr collection</button>
 <div className = "vaultcell">
 <div className="vaultcellleft">
                    <h2>Brotherhood of Steel Core Game Box</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].BOS_CoreBox)} </h3>
                    
                    <img alt="Brotherhood core box" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Group_Box-BoSCore-FWW-RGB_150dpi_MUH051905_600x.jpg?v=1631844505" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-brotherhood-of-steel-core-box">store link</a>
                    <h4>Price: $56.00</h4>
                    <h4>Description</h4>
            
                    <p>
                    </p>
                    <ul> Comes With
                        <li>2x Lancers</li>
                        <li>2x Field Scribes</li>
                        <li>2x Knight Patrol</li>
                        <li>1x T60 Paladin with Gatling Laser</li>
                        <li>7x Scenic bases.</li>
                    </ul>
                    </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Brotherhood of Steel: Liberty Prime</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].BOS_Liberty_Prime)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Unpainted-Shot-Fallout-Wasteland-Warfare-MUH051980_600x.jpg?v=1624977815" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-brotherhood-of-steel-liberty-prime">store link</a>
                    <h4>Price: $139.00</h4>
                    <h4>Description</h4>
                    <p>Global positioning initialized. Location - the Commonwealth of Massachusetts.</p>
                    <p>Birthplace of American freedom...</p>
                    <p>“Liberty Prime is online"</p>
                    <p>The largest mechanical monster of the wastes. Bigger than a Behemoth. Rougher than a Raider. 
                        Deadlier than a Deathclaw. Liberty Prime is striding forward, crushing enemies like bugs and 
                        smashing all resistance in its way – for Freedom!</p>
                   
                    <p>Probability of mission hindrance: zero percent"</p>
                    <p>“Embrace democracy or you will be eradicated"</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Brotherhood of Steel: Elder Maxson and Captain Kells </h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].BOS_Cade_Danse)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/4DjvXn5Q_f72b8815-6e5e-40bb-8568-eeae6d9ab168_600x.jpg?v=1624652679" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-brotherhood-of-steel-elder-maxson-and-captain-kells">store link</a>
                    <h4>Price: $34.00</h4>
                    <h4>Description</h4>
            
                    <p>
                    The Brotherhood of Steel are an elite fighting force, and their high command are the best of the best. Whether wastelanders agree with Brotherhood and its aims or not, few would wish to put either Captain Kells or their leader Elder Maxson to the test on the battlefield. Wielding high tech weaponry and heavy armor on top of their incredible skill, these two heroes of the Brotherhood. 
                    </p>
                    <p>
                    Maxson is a true blue Brotherhood member. Since an early age he lived and breathed the Brotherhood, himself a direct descendant of Roger Maxson, the faction’s founder. He was the youngest person ever to be elevated to the rank of Elder, and uses a mix of hardline and more lenient brotherhood ideologies to direct the east coast faction as an effective fighting force. His command is so effective he rarely has to enter the fray himself, having proved himself in combat many times over before. If the situation is dire he dons his power armor and takes to the battlelines, leading from the front with his custom tuned Final Judgement, dealing massive amounts of energy damage to any who dare oppose the clear and righteous will of the Brotherhood of Steel. 
                    </p>
                    <p>
                    Lancer Captain Kells captains the Prydwen, the Brotherhood’s armored airship. Ready to fight off all comers to the Brotherhood’s mobile base, he is fiercely protective of his brothers and sisters, and will dispatch rank and file members to target threats and eliminate them with extreme prejudice and massed laser rifle fire.
                    </p>
                    <ul> Comes With
                        <li>1 x Elder Maxson</li>
                        <li>1 x Elder Maxson Power Armour</li>
                        <li>1 x Captain Kells</li>
                      
                    </ul>
                    <p>Players will need the Institute Wave Card Expansion Pack to use the contents of this box.</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Brotherhood of Steel: Knight-Captain Cade and Paladin Danse</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].BOS_Cade_Danse)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Group_Box-BoSKnightCaptainCade_PaladinDanse-FWW-RGB_150dpi-MUH051238_600x.jpg?v=1631844428" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-two-player-starter-set-fallout-wasteland-warfare-brotherhood-of-steel-knight-captain-cade-and-paladin-dance">store link</a>
                    <h4>Price: $28.00 </h4>
                    <h4>Description</h4>
            
                    <p>
                    </p>
                    <ul> Comes With
                        <li>1x Knight-Captain Cade</li>
                        <li>1x Paladin Danse</li>
                        <li>1x Eyebot</li>
                      
                    </ul>
                    </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Brotherhood of Steel: Frontline Knights</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].BOS_FrontLine)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Group_Box-BoSFrontlineKnights-FWW-RGB-150-MUH051237_600x.jpg?v=1631844584" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-brotherhood-of-steel-frontline-knights">store link</a>
                    <h4>Price: $35.00</h4>
                    <h4>Description</h4>
        
                    <ul> Comes With
                        <li>1x Knight in T60 armour</li>
                        <li>3x Knight Patrol in combat armour with laser rifles</li>
                    </ul>
                    </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Brotherhood of Steel Power Armor 1</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].BOS_PowerArmor1)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/AHTP5YbQ_1000x.jpg?v=1631743508" />
                   </div>
                    <div className="vaulcellright">
                   <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-brotherhood-of-steel-power-armor">store link</a>
                    <h4>Price: </h4>
                    <h4>Description</h4>
            
                    <p>Power Armor is the backbone of the Brotherhood of Steel, the hardened shell that houses their elite warriors and lets them take the battle to their enemies in the wasteland. Seeing a group of fighters in these exosuits brings hope to the hearts of allies and fear to any right thinking foe that gets in the way. 
                    </p>
                </div>
                </div>
        </div> );
    }
}
 
export default BOS;