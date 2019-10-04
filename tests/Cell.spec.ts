import { Cell } from "../src/Cell";

describe('Cell', () => {
    it('sets its state in the constructor', () => {
        const notOccupiedCell = new Cell(false);
        expect(notOccupiedCell.isOccupied()).toEqual(false);

        const occupiedCell = new Cell(true);
        expect(occupiedCell.isOccupied()).toEqual(true);
    });

});
