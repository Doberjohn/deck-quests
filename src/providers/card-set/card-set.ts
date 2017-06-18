import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CardSetsProvider {

    sets: any;

    constructor() {
        this.sets = [
            {
                id: 1,
                name: "Basic Set",
                numberOfCards: 138,
                releaseData: null
            }
        ]
    }

    public getNumberOfCardsInSet(setId: number) {
        return (this.sets[setId-1].numberOfCards);
    }

}
