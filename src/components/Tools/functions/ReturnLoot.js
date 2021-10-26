import React, { useState } from 'react';
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

const ReturnLoot = () => {
  
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
            return AlcoholArray[randomNumber(0,9)][0]
        break;
        case 1:
            console.log('Armor')
            return ArmorArray[randomNumber(0,18)][0]
        break;
        case 2:
            console.log('chem')
            return ChemArray[randomNumber(0,26)][0]
        break;
        case 3:
            console.log('clothing')
            return ClothingArray[randomNumber(0,30)][0]
        break;
        case 4:
            console.log('food')
            return FoodArray[randomNumber(0,30)][0]
        break;
        case 5:
            console.log('gear')
            return GearArray[randomNumber(0,40)][0]
        break;
        case 6:
            console.log('heavy weapon')
            return HeavyArray[randomNumber(0,9)][0]
        break;
        case 7:
            console.log('melee')
            return MeleeArray[randomNumber(0,29)][0]
        break;
        case 8:
            console.log('mines')
            return MineArray[randomNumber(0,3)][0]
        break;
        case 9:
            console.log('pistol')
            return PistolArray[randomNumber(0,26)][0]
        break;
        case 10:
            console.log('Power Armor')
            return PowerArmorArray[randomNumber(0,10)][0]
        break;
        case 11:
            console.log('Rifle')
            return RifleArray[randomNumber(0,29)][0]
        break;
        case 12:
            console.log('Thow')
            return ThrowArray[randomNumber(0,14)][0]
        break;
        
    }}

    export default ReturnLoot
    