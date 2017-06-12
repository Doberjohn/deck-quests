import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CardComponent} from "../../components/card/card";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    card1: CardComponent = new CardComponent();

    pouch = {
        id: 1,
        code: 'PF',
        description: 'You find a pouch on the ground',
        category: 'Event',
        choices: [
            {
                id: 1,
                code: 'PF-CH01',
                description: '1) Examine the purse',
                events: [
                    {
                        id: 1,
                        code: 'PF-CH01-EV01',
                        description: 'You carefully examine the pouch. You can tell that there is something inside.',
                        result: {
                            category: 'XP',
                            amount: 1
                        },
                        chance: 70
                    },
                    {
                        id: 2,
                        code: 'PF-CH01-EV02',
                        description: 'You take a sharp look and then shake the pouch...but you hear nothing. It seems to be empty.',
                        chance: 25
                    },
                    {
                        id: 3,
                        code: 'PF-CH01-EV03',
                        description: 'While you are starring at the pouch, someone from behind knocks you down and grabs the purse.',
                        chance: 5
                    }
                ]
            },
            {
                id: 2,
                code: 'PF-CH02',
                description: '2) Open the purse',
                events: [
                    //TODO IF ADVENTURE LOG CONTAINS GP-CH01-EV01
                ]
            },
            {
                id: 3,
                code: 'PF-CH03',
                description: '3) Take the purse with you',
                events: []
            },
            {
                id: 4,
                code: 'PF-CH04',
                description: '4) Leave the purse',
                events: [
                    //TODO SECRET EVENT: SOMEONE WHO IS WATCHING TAKES THE PURSE YOU LEFT BEHIND.
                ]
            }
        ]
    };

    constructor(public navCtrl: NavController) {
        this.card1.setBasicData('a','a');
    }

}
