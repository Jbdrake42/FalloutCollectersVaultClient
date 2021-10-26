import React from 'react';
import {AlcoholArray} from '../lists/Alcohol'
import {ArmorArray} from '../lists/Armor'
import {ChemArray} from '../lists/Chems'
import {ClothingArray} from '../lists/Clothing'
import {FoodArray} from '../lists/Food'
import {GearArray} from '../lists/Gear'
import {HeavyArray} from '../lists/HeavyWeapons'
import {MeleeArray} from '../lists/Melee'
import {MineArray} from '../lists/Mines'
import {PistolArray} from '../lists/Pistols'
import {PowerArmorArray} from '../lists/PowerArmor'
import {RifleArray} from '../lists/Rifles'
import {ThrowArray} from '../lists/Throw'

const Returntradloot = () => {
  
    function randomNumber(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min
        return result
      }

let firstnum = randomNumber(0,12)
        switch(firstnum){
        case 0:
            console.log('Alcohol') 
            return (
                <>
                <tr>
                <td>{AlcoholArray[randomNumber(0,9)][0]}</td>
                <td>{AlcoholArray[randomNumber(0,9)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 1:
            console.log('Armor')
            return (
                <>
                <tr>
                <td>{ArmorArray[randomNumber(0,18)][0]}</td>
                <td>{ArmorArray[randomNumber(0,18)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 2:
            console.log('chem')
            return (
                <>
                <tr>
                <td>{ChemArray[randomNumber(0,26)][0]}</td>
                <td>{ChemArray[randomNumber(0,26)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 3:
            console.log('clothing')
            return (
                <>
                <tr>
                <td>{ClothingArray[randomNumber(0,30)][0]}</td>
                <td>{ClothingArray[randomNumber(0,30)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 4:
            console.log('food')
            return (
                <>
                <tr>
                <td>{FoodArray[randomNumber(0,30)][0]}</td>
                <td>{FoodArray[randomNumber(0,30)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 5:
            console.log('gear')
            return (
                <>
                <tr>
                <td>{GearArray[randomNumber(0,40)][0]}</td>
                <td>{GearArray[randomNumber(0,40)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 6:
            console.log('heavy weapon')
            return (
                <>
                <tr>
                <td>{HeavyArray[randomNumber(0,9)][0]}</td>
                <td>{HeavyArray[randomNumber(0,9)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 7:
            console.log('melee')
            return (
                <>
                <tr>
                <td>{MeleeArray[randomNumber(0,29)][0]}</td>
                <td>{MeleeArray[randomNumber(0,29)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 8:
            console.log('mines')
            return (
                <>
                <tr>
                <td>{MineArray[randomNumber(0,3)][0]}</td>
                <td>{MineArray[randomNumber(0,3)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 9:
            console.log('pistol')
            return (
                <>
                <tr>
                <td>{PistolArray[randomNumber(0,26)][0]}</td>
                <td>{PistolArray[randomNumber(0,26)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 10:
            console.log('Power Armor')
            return (
                <>
                <tr>
                <td>{PowerArmorArray[randomNumber(0,10)][0]}</td>
                <td>{PowerArmorArray[randomNumber(0,10)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 11:
            console.log('Rifle')
            return (
                <>
                <tr>
                <td>{RifleArray[randomNumber(0,29)][0]}</td>
                <td>{RifleArray[randomNumber(0,29)][1]}</td>     
                </tr>
                </>
            )
        break;
        case 12:
            console.log('Thow')
            return (
                <>
                <tr>
                <td>{ThrowArray[randomNumber(0,14)][0]}</td>
                <td>{ThrowArray[randomNumber(0,14)][1]}</td>     
                </tr>
                </>
            )
        break;
        
    }}

    export default Returntradloot
    