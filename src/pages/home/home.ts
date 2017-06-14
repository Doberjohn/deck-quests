import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Card} from "../../directives/card/card";

import * as card_data from '../../assets/cards_data/english/PF.json';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    // card : any = {
    //     id: 1,
    //     code: 'PF',
    //     description: 'You find a card on the ground',
    //     category: 'Event',
    //     choices: [
    //         {
    //             id: 1,
    //             code: 'PF-CH01',
    //             description: '1) Examine the purse',
    //             events: [
    //                 {
    //                     id: 1,
    //                     code: 'PF-CH01-EV01',
    //                     description: 'You carefully examine the card. You can tell that there is something inside.',
    //                     result: {
    //                         category: 'XP',
    //                         amount: 1
    //                     },
    //                     chance: 70
    //                 },
    //                 {
    //                     id: 2,
    //                     code: 'PF-CH01-EV02',
    //                     description: 'You take a sharp look and then shake the card...but you hear nothing. It seems to be empty.',
    //                     chance: 25
    //                 },
    //                 {
    //                     id: 3,
    //                     code: 'PF-CH01-EV03',
    //                     description: 'While you are starring at the card, someone from behind knocks you down and grabs the purse.',
    //                     chance: 5
    //                 }
    //             ]
    //         },
    //         {
    //             id: 2,
    //             code: 'PF-CH02',
    //             description: '2) Open the purse',
    //             events: [
    //                 //TODO IF ADVENTURE LOG CONTAINS GP-CH01-EV01
    //             ]
    //         },
    //         {
    //             id: 3,
    //             code: 'PF-CH03',
    //             description: '3) Take the purse with you',
    //             events: []
    //         },
    //         {
    //             id: 4,
    //             code: 'PF-CH04',
    //             description: '4) Leave the purse',
    //             events: [
    //                 //TODO SECRET EVENT: SOMEONE WHO IS WATCHING TAKES THE PURSE YOU LEFT BEHIND.
    //             ]
    //         }
    //     ]
    // };

    card: Card;
    selectedChoice: number;

    constructor(public navCtrl: NavController) {

        let data = <any>card_data;

        this.card = new Card(data.id, data.code, data.text, data.category, data.setNumber, data.illustrator);
        this.card.addNewChoice('Open it');
        this.card.addNewChoice('Examine it carefully');
        this.card.addNewChoice('Store it in your inventory');
        this.card.addNewChoice('Leave it and continue your quest');

        console.log(this.card);
    }


    changeChoice(choice) {
        this.selectedChoice = choice;
    }

    isChoiceSelected(index) {
        let style;
        if (this.selectedChoice === index) {
            style = {
                'border': '1px solid #4CAF50',
                'background-color': '#4CAF50'
            }
        } else {
            style = {
                'border': '1px solid #4CAF50',
            }
        }
        return style;
    }
}
