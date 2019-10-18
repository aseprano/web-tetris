import { Cell } from "../src/impl/Cell";

describe('Cell', () => {
    
    it('sets its state in the constructor', () => {
        const notOccupiedCell = new Cell(false);
        expect(notOccupiedCell.isOccupied()).toEqual(false);

        const occupiedCell = new Cell(true);
        expect(occupiedCell.isOccupied()).toEqual(true);
    });

    it('can be occupied', () => {
        const cell = new Cell(false);
        cell.setIsOccupied();
        expect(cell.isOccupied()).toEqual(true);
    });

});
