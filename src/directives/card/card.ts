import {Directive} from '@angular/core';

@Directive({
    selector: '[card]' // Attribute selector
})
export class Card {

    private id: number;
    private code: string;
    private text: string;
    private category: string;
    private choices: any;

    constructor(id: number, code: string, text: string, category: string) {
        this.id = id;
        this.code = code;
        this.text = text;
        this.category = category;
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
