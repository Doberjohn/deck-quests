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
}
