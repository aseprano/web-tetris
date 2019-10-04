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
    getPoints(): Point[];

}

export abstract class TetrominoBase implements Tetromino {

    protected abstract positionsPoints: Point[][];

    /**
     * Position property. 
     * 
     * Holds the index of the current position in the `positionPoints` array
     * It should be a number between 0 and 3
     */
    get position(): number {
        return this._position;
    }
    private _position: number;

    /**
     * Points property.
     * 
     * Hold the current coordinates of the tetromino as a `Point` array
     */
    getPoints(): Point[] {
        return this.positionsPoints[this.position];
    }

    constructor() {
        this._position = 0;
    }

    /**
     * Negative rotation of the tetromino path
     * 
     * Ensure position decreases
     * and is always in range 0-3
     */
    rotateLeft(): void {

        this._position = this.rotate(this.position - 1);
    }

    /**
     * Positive rotation of the tetromino path
     * 
     * Ensure position increases
     * and is always in range 0-3
     */
    rotateRight(): void {

        this._position = this.rotate(this.position + 1);
    }

    /**
     * Universal Rotation Function
     */
    private rotate(ins: number) {
        const i = ins % 4;

        return ( (i + 4) == 4) ? 0 
            : (i >= 0) 
                ? i 
                : i + 4;
    }
}