import { ImmutableCell } from "../ImmutableCell";

export class Cell implements ImmutableCell {
    
    constructor(private occupied: boolean = false) {}

    isOccupied(): boolean {
        return this.occupied;
    }

    setIsOccupied(): void {
        this.occupied = true;
    }
    
}
