import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CardSetsProvider {

    sets: any;

    constructor() {
        this.sets = [
            {
                id: 1,
                name: "Classic Set",
                numberOfCards: 138,
                releaseDate: null
            }
        ]
    }

    public getNumberOfCardsInSet(setId: number) {
        return (this.sets[setId-1].numberOfCards);
    }

}
