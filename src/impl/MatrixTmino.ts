import { Tetromino } from "../Tetromino";
import { Point } from "../Point";

export class MatrixTmino implements Tetromino {

    constructor(private tmino: Tetromino, private position: Point) {}

    getPosition(): Point {
        return this.position;
    }

    setPosition(newPosition: Point) {
        this.position = newPosition;
    }

    rotateLeft(): void {
        this.tmino.rotateLeft();
    }
    
    rotateRight(): void {
        this.tmino.rotateRight();
    }

    getPoints(): Point[] {
        return this.tmino.getPoints();
    }


}