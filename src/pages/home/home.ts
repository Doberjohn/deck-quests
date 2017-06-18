import {Component} from '@angular/core';
import {Card} from "../../directives/card/card";
import * as $ from 'jquery'

import {Http, Response,} from '@angular/http';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    pf: Card;
    selectedChoice: number;

    constructor(private http: Http) {
        this.http.get("https://card-quests.000webhostapp.com/Cards/1.json")
            .map(response => response.json())
            .subscribe((res: Response) => {
                this.pf = new Card(<any>res);
            });
    }

    changeChoice(choice) {
        this.selectedChoice = choice;
        let text = this.pf.triggerEvent(this.selectedChoice);
        $(".card-text").text('');
        this.showText(".card-text", text, 0, 50);
    }

    isChoiceSelected(index) {
        let rarity = this.pf.getRarityClass();
        if (this.selectedChoice === index) {
            return rarity + '-choice-selected'
        } else {
            return rarity + '-choice'
        }
    }

    getRarityClass() {
        return this.pf.getRarityClass() + "-card";
    }

    showText(target, message, index, interval) {
        let that = this;
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () {
                that.showText(target, message, index, interval);
            }, interval);
        }
    }
}
