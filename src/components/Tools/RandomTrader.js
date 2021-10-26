import React, { useState } from 'react';
import Returntradloot from "./functions/returntrader";

const RandomTrader = () => {
    const [TraderActive, setTraderActive] = useState(false);
    const toggle = () => setTraderActive(!TraderActive);
    function traderInventorize(){
        
        for(let i = 0; i < 10; i++){
            
            
            return (
                <table>
                    <tr>
                    <td>Item</td>
                    <td>Caps</td>
                </tr>
                    {Returntradloot()}
                    {Returntradloot()}
                    {Returntradloot()}
                    {Returntradloot()}
                    {Returntradloot()}
                    {Returntradloot()}
                    {Returntradloot()}
                    {Returntradloot()}
                    {Returntradloot()}
                    {Returntradloot()}
                    </table>
            )
        }
    }
    return ( 
        <div>
            'ello from trader generator
            <button onClick={toggle}>trader me</button>
            <table>
                
            {TraderActive ? traderInventorize() : <></>}
            </table>
        </div>
     );
}
 
export default RandomTrader;