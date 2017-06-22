import {Directive} from '@angular/core';
import {CardSetsProvider} from '../../providers/card-set/card-set';
import {Response, Http,} from "@angular/http";

@Directive({
    selector: '[card]', // Attribute selector,
})
export class Card {

    private text: string;
    private choices: any;
    private numberInSet: string;
    private type: string;
    private illustrator: string;
    private description: string;
    private image: string;

    constructor(dataUrl: string, private http: Http) {
        http.get(dataUrl)
            .map(response => response.json())
            .subscribe((res: Response) => {
                let data = <any>res;
                
                this.description = data.long_description;
                this.text = data.text;
                this.numberInSet = data.numberInSet + "/" + (new CardSetsProvider()).getNumberOfCardsInSet(data.set.id);
                this.type = data.type;
                this.image = data.image;
                this.illustrator = data.illustrator;
                this.choices = data.choices;
            });
    }

    getImage() {
        return this.image;
    }

    triggerEvent(choiceId: number) {
        let events = this.choices[choiceId].events;
        let chance: number = Math.floor((Math.random() * 100) + 1);
        let chancesArray = this.calculateChances(events);

        console.log(chance);
        console.log(chancesArray);

        for (let i = 0; i < chancesArray.length; i++) {
            if (chance <= chancesArray[i]) {
                return events[i].text;
            }
        }
    }

    calculateChances(events) {
        let chancesArray: any = [];
        let accumulatedChance = 0;

        for (let i = 0; i < events.length; i++) {
            accumulatedChance += events[i].chance;

            chancesArray.push(accumulatedChance);
        }

        return chancesArray.sort(function (a, b) {
            return a - b
        });
    }
}
