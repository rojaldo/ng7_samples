export class Hero {
    constructor(public name: string, public description?: string, public rating?: number) {
        if (!description) {
            this.description = '';
        }
        if (!rating) {
            this.rating = 5;
        }
    }
}
