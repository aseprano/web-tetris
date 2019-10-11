import { Matrix, MatrixObserver } from "../Matrix";
import { Point } from "../Point";
import { Tetromino } from "../Tetromino";
import { Cell } from "../Cell";
import { MatrixTmino } from "./MatrixTmino";

class NullTetromino implements Tetromino {

    rotateLeft(): void {
    }
    
    rotateRight(): void {
    }

    getPoints(): Point[] {
        return [];
    }

}

export class MatrixImpl implements Matrix {
    /**
     * cells are ordere by row, then by column
     * Cells[y][x]
     **/
    private cells: Cell[][] = [];

    private currentTmino: MatrixTmino;

    constructor() {
        this.currentTmino = new MatrixTmino(
            new NullTetromino(),
            new Point(0,0)
        );

        for (let row=0; row < 20; ++row) {
            const theRow = [];

            for (let col=0; col < 10; ++col) {
                theRow.push(new Cell());
            }

            this.cells.push(theRow);
        }
    }

    private getCell(coordinates: Point): Cell {
        return this.cells[coordinates.getY()][coordinates.getX()];
    }

    private pointOverflows(point: Point): boolean {
        return point.getX() < 0
            || point.getX() >= this.cells[0].length
            || point.getY() >= this.cells.length;
    }

    private cellIsOccupied(coordinates: Point): boolean {
        return this.getCell(coordinates).isOccupied();
    }

    private tminoCollides(): boolean {
        return this.currentTmino
            .getPoints()
            .find(point => {
                return this.pointOverflows(point) || this.cellIsOccupied(point);
            }) !== undefined;
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
        
    }
    
    moveRight(): boolean {
        throw new Error("Method not implemented.");
    }

    removeLines(lines: number[]) {
        
    }

    addObserver(observer: MatrixObserver): void {
        
    }

    
}