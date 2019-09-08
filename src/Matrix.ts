import { Tetramino } from './Tetramino';
import { Cell } from './Cell';

export interface MatrixObserver {

    matrixDidUpdate(matrix: Matrix, newPixels: Cell[][]): void;

}

export interface Matrix {

    /**
     * Inserts a new tetraimino as the current piece.
     * The new tetraimo is put on the topomost row, in the center.
     * Returns false if the new tetramino collides.
     * 
     * @param newTetramino 
     */
    insert(newTetramino: Tetramino): boolean;

    /**
     * Tries to rotate the current tetramino left.
     * If the tetramino cannot rotate, nothing happens.
     */
    rotateLeft(): void;

    /**
     * Tries to rotate the current tetramino right.
     * If the tetramino cannot rotate, nothing happens.
     */
    rotateRight(): void;

    /**
     * Tries to move the current tetramino on the next row.
     * Returns true if the current tetramino is moved down, false otherwise.
     */
    moveDown(): boolean;

    /**
     * Returns the full 10x20 copy of the cells matrix
     */
    getPixels(): Cell[][];

    /**
     * Adds an item to the list of observers.
     * 
     * @param observer
     */
    addObserver(observer: MatrixObserver): void;

}