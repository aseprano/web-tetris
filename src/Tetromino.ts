import { Point } from './Point';

export interface Tetromino {

    /**
     * Rotates the tetromino left
     */
    rotateLeft(): void;

    /**
     * Rotates the tetromino right
     */
    rotateRight(): void;

    /**
     * Returns the list of points of the current tetromino rotation
     */
    points: Point[];

}
