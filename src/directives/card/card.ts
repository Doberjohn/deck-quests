import {Directive} from '@angular/core';
import {CardSetsProvider} from '../../providers/card-set/card-set';

@Directive({
    selector: '[card]', // Attribute selector,
})
export class Card {

    private id: number;
    private text: string;
    private choices: any;
    private rarity: string;
    private numberInSet: string;

    constructor(card_data: '') {
        let data = <any>card_data;

        this.text = data.text;
        this.numberInSet = data.numberInSet + "/" + (new CardSetsProvider()).getNumberOfCardsInSet(data.set.id);
        this.rarity = data.rarity;
        this.choices = data.choices;
    }

    getRarityClass() {
        return this.rarity;
    }

    triggerEvent(choiceId: number) {
        let events = this.choices[choiceId-1].events;
        let chance: number = Math.floor((Math.random() * 100) + 1);
        let accumulatedChance = 0;
        for (let i=0; i<events.length; i++) {
            accumulatedChance += events[i].chance;
            if (chance <= accumulatedChance) {
                console.log(events[i].text);
                return events[i].text;
            }
        }
    }
}
