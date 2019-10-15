import { MatrixImpl } from "../src/impl/MatrixImpl";
import { Point } from "../src/Point";
import { TetrominoJ } from "../src/Tetromino-J";

describe('MatrixImpl', () => {

    /**  0   1   2   3   4   5   6   7   8   9
     * +---+---+---+---+---+---+---+---+---+---+
     * |   |   |   | x | x | x |   |   |   |   |
     * +---+---+---+---+---+---+---+---+---+---+
     * |   |   |   |   |   | x |   |   |   |   |
     * +---+---+---+---+---+---+---+---+---+---+
     * |   |   |   |   |   |   |   |   |   |   |
     * +---+---+---+---+---+---+---+---+---+---+
     */

    const tetrominoJ = new TetrominoJ();

    it('sets the coordinates (4, 0) to a new tetromino', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        expect(matrix.getCurrentPosition()).toEqual(new Point(4, 0));
    });

    it('moves the tetromino to the left if no cell is occupied', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        expect(matrix.moveLeft()).toEqual(true);
        expect(matrix.getCurrentPosition()).toEqual(new Point(3, 0));
    });

    it('moves the tetromino to the left margin if no cell is occupied', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        expect(matrix.moveLeft()).toEqual(true);
        expect(matrix.moveLeft()).toEqual(true);
        expect(matrix.moveLeft()).toEqual(true);
        expect(matrix.getCurrentPosition()).toEqual(new Point(1, 0));
    });

    it('prevents the tetromino to go out of border on the left', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        expect(matrix.moveLeft()).toEqual(true);
        expect(matrix.moveLeft()).toEqual(true);
        expect(matrix.moveLeft()).toEqual(true);
        expect(matrix.moveLeft()).toEqual(false);
        expect(matrix.getCurrentPosition()).toEqual(new Point(1, 0));
    });

    it('moves the tetromino to the right if no cell is occupied', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.getCurrentPosition()).toEqual(new Point(5, 0));
    });

    it('moves the tetromino to the right border if no cell is occupied along its path', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.getCurrentPosition()).toEqual(new Point(8, 0));
    });

    it('prevents the tetromino from going out of border on the right', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.moveRight()).toEqual(false);
        expect(matrix.getCurrentPosition()).toEqual(new Point(8, 0));
    });

    it('can occupy a cell', () => {
        const matrix = new MatrixImpl();
        expect(matrix.cellIsOccupied(new Point(0, 0))).toEqual(false);
        matrix.occupyCell(new Point(0, 0));
        expect(matrix.cellIsOccupied(new Point(0, 0))).toEqual(true);
    });

    it('cannot move the tetramino to the left border if at least on cell along the path is occupied', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        matrix.occupyCell(new Point(1, 0));
        expect(matrix.moveLeft()).toEqual(true);
        expect(matrix.moveLeft()).toEqual(false);
        expect(matrix.getCurrentPosition()).toEqual(new Point(3, 0));
    });

    it('cannot move the tetramino to the right border if at least on cell along the path is occupied', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        matrix.occupyCell(new Point(7, 0));
        expect(matrix.moveRight()).toEqual(true);
        expect(matrix.moveRight()).toEqual(false);
        expect(matrix.getCurrentPosition()).toEqual(new Point(5, 0));
    });

    it('can move the tetromino one row down if no cell is occupied', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        expect(matrix.moveDown()).toEqual(true);
        expect(matrix.getCurrentPosition()).toEqual(new Point(4, 1));
    });

    it('cannot move the tetromino one row down if at least one cell of the new row collides with the tetromino', () => {
        const matrix = new MatrixImpl();
        matrix.insert(tetrominoJ);
        matrix.occupyCell(new Point(4, 1));
        expect(matrix.moveDown()).toEqual(false);
        expect(matrix.getCurrentPosition()).toEqual(new Point(4, 0));
    });

});
