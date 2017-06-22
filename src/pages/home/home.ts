import {Component} from '@angular/core';
import {Card} from "../../directives/card/card";
import * as $ from 'jquery'
import {Player} from "../../directives/player/player";
import {Http} from "@angular/http";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    player: Player;
    card: Card;
    selectedChoice: number;
    timer: any = null;
    timerInterval: number;

    constructor(private http: Http) {
        this.card = new Card("https://jsonblob.com/api/jsonBlob/e10a0d8c-54dc-11e7-ae4c-f3f9519379da", this.http);
    }

    setCardArtwork() {
        return {'background-image': 'url(' + this.card.getImage() + ')'}
    }

    changeChoice(choice) {
        if (this.timer === null) {
            this.timerInterval = 50;
            this.selectedChoice = choice;
            $(".card-text").text('');
            this.showText(".card-text", this.card.triggerEvent(this.selectedChoice), 0);
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
