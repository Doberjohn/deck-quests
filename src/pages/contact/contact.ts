import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    private player;

    constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {
        // this.player = new Player("https://jsonblob.com/api/jsonBlob/504799d8-574c-11e7-ae4c-4964007382cd", this.http);
    }


    startStoryMode() {
        let options: NativeTransitionOptions = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };


        this.nativePageTransitions.fade(options);
        this.navCtrl.push(HomePage);
    }

}
