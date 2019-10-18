import { Matrix, MatrixObserver } from "../Matrix";
import { Point } from "../Point";
import { Tetromino } from "../Tetromino";
import { Cell } from "./Cell";
import { MatrixTmino } from "./MatrixTmino";
import { ImmutableCell } from "../ImmutableCell";

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

    private tminoCollides(): boolean {
        return this.currentTmino
            .getPointsRelativeToMatrix()
            .find(point => {
                return this.pointOverflows(point) || this.cellIsOccupied(point);
            }) !== undefined;
    }

    private tryMoveTetrominoBy(delta: Point): boolean {
        const oldPosition = this.getCurrentPosition();
        this.currentTmino.setPosition(oldPosition.add(delta));
        
        if (this.tminoCollides()) {
            this.currentTmino.setPosition(oldPosition);
            return false;
        }

        return true;
    }

    insert(newTmino: Tetromino): boolean {
        this.currentTmino = new MatrixTmino(newTmino, new Point(4, 0));
        return this.tminoCollides();
    }

    public occupyCell(cellCoordinates: Point): void {
        this.getCell(cellCoordinates).setIsOccupied();
    }

    public cellIsOccupied(cellCoordinates: Point): boolean {
        return this.getCell(cellCoordinates).isOccupied();
    }

    public getCurrentPosition(): Point {
        return this.currentTmino.getPosition();
    }

    getSnapshot(): ImmutableCell[][] {
        const snapshot: ImmutableCell[][] = [];
        this.cells.forEach(
            row => snapshot.push([...row])
        );
        return snapshot;
    }
    
    rotateLeft(): boolean {
        throw new Error("Method not implemented.");
    }

    rotateRight(): boolean {
        throw new Error("Method not implemented.");
    }

    moveDown(): boolean {
        return this.tryMoveTetrominoBy(new Point(0, 1));
    }

    moveLeft(): boolean {
        return this.tryMoveTetrominoBy(new Point(-1, 0));
    }
    
    moveRight(): boolean {
        return this.tryMoveTetrominoBy(new Point(+1, 0));
    }

    removeLines(lines: number[]) {
        
    }

    addObserver(observer: MatrixObserver): void {
        
    }

    
}