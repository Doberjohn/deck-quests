import {Directive} from '@angular/core';
import {Response, Http} from "@angular/http";

@Directive({
    selector: '[player]' // Attribute selector
})
export class Player {
    private username: string;

    constructor(dataUrl: string, private http: Http) {
        this.http.get(dataUrl)
            .map(response => response.json())
            .subscribe((res: Response) => {
                let data = <any>res;
                this.username = data.username;
            });
    }

}
