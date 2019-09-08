export class Point {

    constructor(private x: number, private y: number) { }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    withX(newX: number): Point {
        return new Point(newX, this.y);
    }

    withY(newY: number): Point {
        return new Point(this.x, newY);
    }

    add(point: Point): Point {
        return new Point(this.x + point.x, this.y + point.y);
    }

}