import { Tetromino } from './Tetromino';
import { ImmutableCell } from './ImmutableCell';

/**
 * Represents an observer of the Matrix.
 */
export interface MatrixObserver {

    /**
     * Main method of the matrix observer.
     * Gets invoked whenever the occupation status of the matrix changes.
     * 
     * @param matrix The matrix that has changed. 
     * @param newPixels A copy of the current matrix status.
     */
    matrixDidUpdate(matrix: Matrix, newPixels: ImmutableCell[][]): void;

}

export interface Matrix {

    /**
     * Inserts a new tetroimino as the current block.
     * The new tetromino is put in the middle cell of the topmost row (x=4, y=0),
     * even if it overlaps other cells.
     * Returns false if the newly placed tetromino overlaps.
     * 
     * @param newTetromino 
     */
    insert(newtetromino: Tetromino): boolean;

    /**
     * Tries to rotate the current tetromino left.
     * If the tetromino cannot rotate, nothing happens.
     */
    rotateLeft(): boolean;

    /**
     * Tries to rotate the current tetromino right.
     * If the tetromino cannot rotate, nothing happens.
     */
    rotateRight(): boolean;

    /**
     * Tries to move the current tetromino one row down.
     * Returns true if the current tetromino has been moved down, false otherwise.
     */
    moveDown(): boolean;

    moveLeft(): boolean;

    moveRight(): boolean;

    removeLines(lines: number[]): void;
    
    /**
     * Adds an observer to the list of observers.
     * 
     * @param observer
     */
    addObserver(observer: MatrixObserver): void;

}