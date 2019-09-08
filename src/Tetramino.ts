import { Point } from './Point';

export interface Tetramino {

    /**
     * Rotates the tetramino left
     */
    rotateLeft(): void;

    /**
     * Rotates the tetramino right
     */
    rotateRight(): void;

    /**
     * Returns the list of points of the current tetramino rotation
     */
    getPoints(): Point[];

}
