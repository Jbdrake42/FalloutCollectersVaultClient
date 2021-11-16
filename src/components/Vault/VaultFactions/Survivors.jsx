import React from "react";
import {
    Modal,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import APIURL from "../../../helpers/environment";
class Survivors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {updateSVROn: false  }
    }
    
    toggle = () => {
        if( this.state.updateSVROn === false){
            this.setState({updateSVROn: true})
        } else {
            this.setState({updateSVROn: false})
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
    UpdateSVR = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')
        fetch(`${APIURL}/vault/SVR/${this.props.Vault[0].id}` ,{
            method: 'PUT',
            body: JSON.stringify({vault:{ SVR_CoreBox :this.state.SVR_CoreBox , SVR_MinuteMen: this.state.SVR_MinuteMen, SVR_Vault: this.state.SVR_Vault, 
                SVR_Boston : this.state.SVR_Boston, SVR_UnusualAllies  : this.state.SVR_UnusualAllies, SVR_SancturyHills  : this.state.SVR_SancturyHills, SVR_Lorenzo  : this.state.SVR_Lorenzo, SVR_NukaGirl  : this.state.SVR_NukaGirl, SVR_X01: this.state.SVR_X01}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : token
            })
        }).then((res) => {
            this.toggle()
            console.log("yo doth")
            this.props.fetchvault()
        })
    }
    render() { 
        return ( <div>
            <Modal isOpen={this.state.updateSVROn}>
                <Form onSubmit={this.UpdateSVR} className="vaultupdate">
                    <FormGroup>
                        <Label>Survivors Core Box</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="corebox" onChange={(e) => this.setState({  SVR_CoreBox : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="corebox" onChange={(e) => this.setState({  SVR_CoreBox : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Survivors: Minutemen Posse</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="prime" onChange={(e) => this.setState({  SVR_MinuteMen : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="prime" onChange={(e) => this.setState({  SVR_MinuteMen : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Survivors: Vault Personnel</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="max" onChange={(e) => this.setState({  SVR_Vault : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="max" onChange={(e) => this.setState({  SVR_Vault : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Survivors: Boston Companions</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="danse" onChange={(e) => this.setState({  SVR_Boston : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="danse" onChange={(e) => this.setState({  SVR_Boston : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Survivors: Unusual Allies</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="knights" onChange={() => this.setState({ SVR_UnusualAllies : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="knights" onChange={() => this.setState({ SVR_UnusualAllies : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Survivors: Heroes of Sanctuary Hills</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="power" onChange={() => this.setState({  SVR_SancturyHills : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="power" onChange={() => this.setState({  SVR_SancturyHills : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Survivors: Lorenzo Cabot</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="cabot" onChange={() => this.setState({  SVR_Lorenzo : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="cabot" onChange={() => this.setState({  SVR_Lorenzo : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nuka Cola Girl</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="nuka" onChange={() => this.setState({  SVR_NukaGirl : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="nuka" onChange={() => this.setState({  SVR_NukaGirl : false})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>X-01 Survivor & Dogmeat</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Owned</Label>
                        <Input type="radio" name="x01" onChange={() => this.setState({  SVR_X01 : true})}></Input>
                        <Label>Not yet</Label>
                        <Input type="radio" name="xo1" onChange={() => this.setState({  SVR_X01 : false})}></Input>
                    </FormGroup>
                    <input type="submit" />
                    <button onClick={this.toggle}>close</button>
                </Form>
             </Modal>
             <button onClick={this.toggle}>Update your Survivor Collection</button>
             <div className = "vaultcell">
             <div className="vaultcellleft">
                    <h2>Survivors Core Box</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_CoreBox)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Product-Shot-Fallout-Wasteland-Warfare-MUH051243_500x.jpg?v=1631844763" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-survivors-core-box">store link</a>
                    <h4>Price: $56.00</h4>
                    <h4>Description</h4>
            
                    <p>
                    Expand your collection with these high quality multi-part 32mm scale resin miniatures of Mama Murphy, Preston Garvey, Ronnie Shaw, Sturges, 2 male and 2 female settlers. 
                    </p>
                    <ul> Comes With
                        <li>1x Mama Murphy</li>
                        <li>1x Preston Garvey</li>
                        <li> 1x Ronnie Shaw</li>
                        <li>1x Sturges</li>
                        <li>4x Settlers (2 male, 2 female)</li>
                    </ul>
                    <p>Requires the Wave 1 Fundamentals Card Deck</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Survivors: Minutemen Posse</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_MinuteMen)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Product-Shot-Fallout-Wasteland-Warfare-MUH051244_500x.jpg?v=1629159911" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-survivors-minutemen-posse">store link</a>
                    <h4>Price: $35.00</h4>
                    <h4>Description</h4>
            
                    <p>
                    The Minutemen are here to save the settlement!
                    </p>
                    <ul> Comes With
                        <li>4 x Minutemen (2 female, 2 male)</li>
                    </ul>
                    <p>notes</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Survivors: Vault Personnel</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_Vault)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/lJaxUOgw_ff5bde14-bb9c-4e01-af8e-50504fc7cfb7_500x.jpg?v=1631844747" />
                 </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-survivors-vault-personnel">store link</a>
                    <h4>Price: $32.00</h4>
                    <h4>Description</h4>
            
                    <p>Life in the Vaults has continued (in most cases) unabated for years since the start of the great war, but now the Vaults are opening. Be it mechanical fault, pre-programmed emergence or outside influence, Vault Dwellers are more and more common in the wasteland. Sometimes such denizens strike out on their own. Other times they join up with fellow survivors or stay in the relative safety of their homes. Either way they have been preparing for emergence for years, and come out swinging.</p>
                    <p>The first line of defence in any vault are the vault security guards. Ostensibly they protect and serve, ensuring any threats from the wasteland are kept and bay and keeping law and order in the vaults themselves. In many vaults they also serve a darker purpose - that of keeping the vault dwellers in line and enforcing the iron will of the overseer, and by extension Vault-Tec itself.</p>
                    <p>The Vault dwellers themselves are often tougher than they first appear. Years and even generations in the vaults have not dulled their abilities, and exercise regimes and stockpiles of food have staved off malnutrition and the rigors of radioactive fallout. Added to this, many Vault dwellers have had to adapt to the conditions in Vaults (which may not always be designed with their best interests at heart). Some of the most notable heroes (and villains) of the wasteland had their start in the Vaults, including the Sole Survivor and the Lone Wanderer.</p>
                   
                    <p>Please note does not include cards, unit and weapon cards are available in the Institute Wave Card Expansion Pack.</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Survivors: Boston Companions</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_Boston)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Group_Box-BostonCompanions-FWW-RGB-150dpi-MUH051260_500x.jpg?v=1629159919" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-survivors-boston-companions">store link</a>
                    <h4>Price: $28.00</h4>
                    <h4>Description</h4>
            
                    <p>This Fallout: Wasteland Warfare set three Survivor characters to expand your faction contains 32mm scale high-quality multi-part resin miniatures with scenic bases. Requires some assembly. Supplied unpainted. Each set provides an expansion to your game with new cards for player vs player and AI game modes
                    </p>
                    <ul> Comes With
                        <li>1x X6-88 Courser</li>
                        <li>1x Piper,</li>
                        <li>1x Cait</li>
                    </ul>
                    <p>notes</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Survivors: Unusual Allies</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_UnusualAllies)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/tiPymzHw_b95761c5-7df7-40ee-80a0-2465400e2042_500x.jpg?v=1631844746" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-survivors-unusual-allies">store link</a>
                    <h4>Price: $32.00</h4>
                    <h4>Description</h4>
            
                    <p>Travelling the scarred remains of the old earth, survivors come across a vast array of allies and enemies in all shapes and sizes. Self-aware detective synths. Murderous colonial mayors. Super mutants in search of dubious milk. All these and more are allies to befriend in the wasteland.</p>
                    <p>Got a problem? Need a clue? Need to check out suspects and investigate? Nick Valentine is your man. Or rather, your synth. An incredibly rare prototype synth designed to be the bridge between generations, Nick finally ended up programmed with the memories of a Pre-War detective. Most people see only his folksy charm and old-style speech on the streets of Diamond City. But out in the wasteland he’s quick on the draw and dogged in his determination to get the job done.</p>
                    <p>Someone broken the law or hurting ghouls? Need someone punished for it? John Hancock’s your man. Or rather, your ghoul. While the Mayor of Goodneighbour might have a harsh streak, there’s method to his madness. Seeking to keep the peace in a lawless wasteland is always a hard job, and Hancock’s happy to oblige. Knife in one hand, gun in the other he makes sure that everyone he comes across agrees to sign on the dotted line. That, or they aren’t around to disagree for long.</p>
                    <p>Someone needs to be beaten into pulp? Need a huge, mean, green companion to sort out your enemies? Strong is your man. Or rather, your Super Mutant. Shakespeare can be interpreted many different ways, but it’s fair to say no one, ever, in the history of the wasteland, has understood it quite like Strong. After a misunderstanding of epic proportions, this confused but deadly mutant is after the Milk of Human Kindness, which he is convinced will give him the strength that makes humans so successful. His thoughts may be misguided, but his aim isn’t. The super mutant lives up to his name, grinding enemies to dust and being a stable platform for heavy weapons. A mutant by any other name would smell as bad, but wouldn’t hit as hard.</p>
                    
                    <p>Please note does not include cards, unit and weapon cards are available in the Institute Wave Card Expansion Pack.</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>X-01 Survivor & Dogmeat</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_X01)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/X-01_500x.jpg?v=1631811402" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-x-01-survivor-dogmeat">store link</a>
                    <h4>Price: </h4>
                    <h4>Description</h4>
            
                    <p>The most advanced armour available, X-01 armour provides excellent protection against physical, energy and radiation damage. Any survivor, Brotherhood of Steel Knight or Raider who chances across a suit will become a force to be reckoned with</p>
                    <p>Dogmeat can also be armoured up, with his Dog Armour providing a little extra protection though at the cost of some speed to this most faithful of companions. </p>
                    <p>This boxed set contains two 32mm scale multi-part high-quality resin miniatures with unique scenic bases, to allow players to expand their Fallout: Wasteland Warfare games. </p>
                    <ul> Comes With
                        <li>1 x X-01 Power Armour Suit</li>
                        <li>3 x Optional Heads</li>
                        <li>1 x Armoured Dogmeat</li>
                        
                    </ul>
                    <p> unit and weapon cards are available in the Raiders Wave Expansion Card Pack</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Survivors: Heroes of Sanctuary Hills</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_SancturyHills)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Product-Shot-Fallout-Wasteland-Warfare-MUH051245_500x.jpg?v=1629159899" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-survivors-heroes-of-sanctuary-hills">store link</a>
                    <h4>Price: $28.00</h4>
                    <h4>Description</h4>
            
                    <p>
                    This set lets you add Nate, the sole survivor, Dogmeat with goggles and a Mr Handy robot by the name of Codsworth to your survivor collection
                    </p>
                    <ul> Comes With
                        <li>1x Male Sole Survivor</li>
                        <li>1x Dogmeat with goggles</li>
                        <li>1x Codsworth</li>
                    </ul>
                    <p>6x Large cards: Unit, AI and 15+ Small cards from a range of: Item (Weapon, Equipment, Mod, Chem), Boost, Quest, Perk, Leader.</p>
                </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Survivors: Lorenzo Cabot</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_Lorenzo)} </h3>
                    
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/fallout-wasteland-warfare-survivors-lorenzo-cabot-fallout-wasteland-warfare-modiphius-entertainment-349158_500x.jpg?v=1629158976" />
                    </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-survivors-lorenzo-cabot">store link</a>
                    <h4>Price: $17.00</h4>
                    <h4>Description</h4>
            
                    <p>Lorenzo Cabot is the mysteriously long-lived patriach of the Cabot family. His telekentic abilities and frightening intellect are brought to bear against all who would oppose his unhinged mind - even if they are bound by blood.
                    
                    </p>
                    </div>
                </div>
                <div className = "vaultcell">
                <div className="vaultcellleft">
                    <h2>Survivors: Nuka Cola Girl</h2>
                    <h3>Owned: {this.CheckMarker(this.props.Vault[0].SVR_NukaGirl)} </h3>
                    <img alt="" src="https://cdn.shopify.com/s/files/1/0576/5696/7339/products/1-Painted-Shot-Fallout-Wasteland-Warfare-MUH051283_500x.jpg?v=1629159012" />
                   </div>
                    <div className="vaulcellright">
                    <br />
                    <a href="https://modiphius.us/collections/fallout-wasteland-warfare/products/fallout-wasteland-warfare-nuka-cola-girl-miniature">store link</a>
                    <h4>Price: </h4>
                    <h4>Description</h4>
            
                    <p>Everybody loves that Nuka!</p>
                    <p>Each bottle of Nuka Cola packs a powerful punch, and now you can bring that power to the wasteland with everyone's favorite gun-toting mascot - Nuka Girl! Have you come across bad guys with no taste? Now you can make sure they never taste anything again. Have you always wanted to zap thirst (and your foes)? ZAAAP! And the thirst is gone. All with Nuka Cola’s own, Nuka Girl! </p>
                    <p>A single miniature of the iconic Nuka-Cola girl, previously only available as part of the launch pre-order bundle. Nuka Cola girl is a character created by the Nuka Cola Corporation whose image adorns promotional material all across the wasteland, however lucky survivors can find her outfit and weapons... </p>
                    <p>This model is produced in multi-part high-quality resin and includes a unique scenic base. Supplied un-painted.  </p>
                    <p>Please note - this pack does not contain the cards required to be played with. </p>
                    </div>
                </div>
        
        </div> );
    }
}
 
export default Survivors;