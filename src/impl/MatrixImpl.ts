import { Matrix, MatrixObserver } from "../Matrix";
import { Point } from "../Point";
import { Tetromino } from "../Tetromino";
import { Cell } from "../Cell";
import { MatrixTmino } from "./MatrixTmino";

export class MatrixImpl implements Matrix {
    private cells: Cell[][] = [];
    private currentTmino?: MatrixTmino;

    constructor() {
        for (let row=0; row < 20; ++row) {
            const theRow = [];

            for (let col=0; col < 10; ++col) {
                theRow.push(new Cell());
            }

            this.cells.push(theRow);
        }
    }

    private tminoCollides(): boolean {
        return false;
    }

    insert(newTmino: Tetromino): boolean {
        this.currentTmino = new MatrixTmino(newTmino, new Point(4, 0));
        return this.tminoCollides();
    }

    getSnapshot(): Cell[][] {
        throw new Error("Method not implemented.");
    }
    
    rotateLeft(): boolean {
        throw new Error("Method not implemented.");
    }

    rotateRight(): boolean {
        throw new Error("Method not implemented.");
    }

    moveDown(): boolean {
        throw new Error("Method not implemented.");
    }

    moveLeft(): boolean {
        throw new Error("Method not implemented.");
    }
    
    moveRight(): boolean {
        throw new Error("Method not implemented.");
    }

    getPixels(): Cell[][] {
        throw new Error("Method not implemented.");
    }

    removeLines(lines: number[]) {
        
    }

    addObserver(observer: MatrixObserver): void {
        throw new Error("Method not implemented.");
    }

    
}