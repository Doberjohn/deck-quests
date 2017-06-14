import {Directive} from '@angular/core';

@Directive({
    selector: '[card]' // Attribute selector
})
export class Card {

    private choices;

    constructor(private id: number, private code: string, private text: string, private category: string, private setNumber: string, private illustrator: string) {
        this.choices = [];
    }
    
    addNewChoice(text: string) {
        let currentNumberOfChoices = this.choices.length + 1;
        let choice = {
            id: currentNumberOfChoices,
            code: this.code + '-CH' + currentNumberOfChoices,
            text: currentNumberOfChoices + ') ' + text,
            events: []
        };
        this.choices.push(choice);
    }
}
