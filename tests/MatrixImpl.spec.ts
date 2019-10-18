import { MatrixImpl } from "../src/impl/MatrixImpl";
import { Point } from "../src/Point";
import { TetrominoJ } from "../src/Tetromino-J";

describe('MatrixImpl', () => {

    /**  0   1   2   3   4   5   6   7   8   9 <x
     * +---+---+---+---+---+---+---+---+---+---+
     * |   |   |   | x | x | x |   |   |   |   | 0
     * +---+---+---+---+---+---+---+---+---+---+
     * |   |   |   |   |   | x |   |   |   |   | 1
     * +---+---+---+---+---+---+---+---+---+---+
     * |   |   |   |   |   |   |   |   |   |   | 2
     * +---+---+---+---+---+---+---+---+---+---+
     */

    const tetrominoJ = new TetrominoJ();
    const tetrominoStartingCoordinates = [
        {x: 3, y:0},
        {x: 4, y:0},
        {x: 5, y:0},
        {x: 5, y:1},
    ];

    it('creates 10x20 matrix snapshots', () => {
        const matrix = new MatrixImpl();
        const snapshot = matrix.getSnapshot();
        expect(snapshot.length).toEqual(20);
        snapshot.forEach(row => {
            expect(row.length).toEqual(10);
        });
    })

    it('returns a clone of the internal matrix representation', () => {
        const matrix = new MatrixImpl();
        const snapshot1 = matrix.getSnapshot();
        snapshot1.pop();
        const snapshot2 = matrix.getSnapshot();
        expect(snapshot2.length).toEqual(20);
        snapshot1[0].pop();
        const snapshot3 = matrix.getSnapshot();
        expect(snapshot3[0].length).toEqual(10);
    })

    it('inserts tetrominos in correct position', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);

        const snapshot = matrix.getSnapshot();

        tetrominoStartingCoordinates.forEach(coordinate => {
            expect(snapshot[coordinate.y][coordinate.x].isOccupied())
            .toEqual(true);
        });
    });

});
