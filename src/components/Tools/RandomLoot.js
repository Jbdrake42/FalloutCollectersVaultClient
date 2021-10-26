import ReturnLoot from "./functions/ReturnLoot"

import React, {useState} from 'react'
const RandomLoot = () => {
    const [Loot, setLoot] = useState([]);

   function Lootme(){
    setLoot(ReturnLoot)
   }
    
    return ( <div>
        Hello from loot generater
        
        <button onClick={Lootme}>Generate some loot</button >
        <p>{Loot}</p>
    </div> );
}
 
export default RandomLoot;