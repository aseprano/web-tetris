export class Cell {
    
    constructor(private occupied: boolean = false) {}

    isOccupied(): boolean {
        return this.occupied;
    }
    
}
