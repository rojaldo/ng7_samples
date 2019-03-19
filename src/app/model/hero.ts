export class Hero {
    constructor(public name: string, public description?: string) {
        if (!description) {
            this.description = '';
        }
    }
}
