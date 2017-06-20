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
    timer: any = null;
    timerInterval: number;

    constructor(private http: Http) {
        this.http.get("https://jsonblob.com/api/jsonBlob/e10a0d8c-54dc-11e7-ae4c-f3f9519379da")
            .map(response => response.json())
            .subscribe((res: Response) => {
                this.pf = new Card(<any>res);
            });
    }

    changeChoice(choice) {
        if (this.timer === null) {
            this.timerInterval = 50;
            this.selectedChoice = choice;
            $(".card-text").text('');
            this.showText(".card-text", this.pf.triggerEvent(this.selectedChoice), 0);
        } else {
            this.timerInterval = 10;
        }
    }

    isChoiceSelected(index) {
        if (this.selectedChoice === index) {
            return 'choice-selected'
        } else {
            return 'choice'
        }
    }

    getRarityClass() {
        return this.pf.getRarityClass() + "-card";
    }

    showText(target, message, index) {
        let that = this;
        if (index < message.length) {
            $(target).append(message[index++]);
            this.timer = setTimeout(function () {
                that.showText(target, message, index);
            }, this.timerInterval);
        } else {
            this.timer = null;
        }
    }
}
