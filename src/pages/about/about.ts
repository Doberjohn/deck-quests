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

    pf: Card;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: Http) {

    }

    ngOnInit() {
        var that = this;
        var draggable = document.getElementById('draggable');
        draggable.addEventListener('touchmove', function (event) {
            var touch = event.targetTouches[0];

            // Place element where the finger is
            draggable.style.left = touch.pageX - 130 + 'px';
            draggable.style.top = touch.pageY - 177 + 'px';
            event.preventDefault();
        }, false);

        draggable.addEventListener('touchend', function (event) {
            that.pf = null;
            $('#draggable').css({
                'transform': 'scale(0.5,0.5)',
                'border': 'none'
            });
        }, false);
    }

    previewCard() {
        this.http.get("https://jsonblob.com/api/jsonBlob/e10a0d8c-54dc-11e7-ae4c-f3f9519379da")
            .map(response => response.json())
            .subscribe((res: Response) => {
                this.pf = new Card(<any>res);
                $('#draggable').css({
                    'transform': 'none',
                    'border': '10px solid black'
                });
            });
    }
}
