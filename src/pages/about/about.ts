import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import * as $ from 'jquery'
import {Card} from "../../directives/card/card";
import {Response, Http} from "@angular/http";

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    card: Card;

    constructor(private http: Http) {

    }

    ngOnInit() {
        $('body').click(function(evt){
            if(!$(evt.target).is('#card')) {
                $('#card').css({
                    'border': 'none'
                });
            }
        });
    }

    highlightCard() {
        $('#card').css({
            'border': '5px solid black'
        });
    }

    previewCard() {
        new Card("https://jsonblob.com/api/jsonBlob/e10a0d8c-54dc-11e7-ae4c-f3f9519379da", this.http);
    }

    closePreview() {
        $('#draggable').css({
            'transform': 'scale(0.5,0.5)',
            'border': 'none'
        });
        this.card = null;
    }
}
