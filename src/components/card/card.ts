import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: 'card.html'
})
export class CardComponent {

    @Input('card-data') cardData;

    card: any;

    description;
    category;

    constructor() {
        this.card = {
            description: '',
            category: ''
        }
    }

    ngAfterViewInit() {
        console.log(this.cardData);
        this.card = this.cardData;
    }

    setBasicData(desc: string, cat: string) {
        this.description = desc;
        this.category = cat;
    }
}
