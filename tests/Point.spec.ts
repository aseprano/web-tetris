import { Point } from '../src/Point';

describe('Point', () => {

    it('is properly initialized', () => {
        const point = new Point(1, 7);
        expect(point.getX()).toBe(1);
        expect(point.getY()).toBe(7);
    });

    it('supports negative numbers', () => {
        const point = new Point(-1, -7);
        expect(point.getX()).toBe(-1);
        expect(point.getY()).toBe(-7);
    });

    it('can change its X value by returning a new Point', () => {
        const p1 = new Point(1, 7);

        const p2 = p1.withX(3);
        expect(p2.getX()).toBe(3);
        expect(p2.getY()).toBe(7);

        // assert that p1 has not been changed
        expect(p1.getX()).toBe(1);
        expect(p1.getY()).toBe(7);
    });

    it('can change its Y value by returning a new Point', () => {
        const p1 = new Point(1, 7);

        const p2 = p1.withY(3);
        expect(p2.getX()).toBe(1);
        expect(p2.getY()).toBe(3);

        // assert that p1 has not been changed
        expect(p1.getX()).toBe(1);
        expect(p1.getY()).toBe(7);
    });

    it('can sum two points by returning a new Point', () => {
        const p1 = new Point(1, 7);
        const p2 = new Point(2, 3);

        const px = p1.add(p2);
        expect(px.getX()).toBe(3);
        expect(px.getY()).toBe(10);

        // assert that p1 has not been changed
        expect(p1.getX()).toBe(1);
        expect(p1.getY()).toBe(7);

        // assert that p2 has not been changed
        expect(p2.getX()).toBe(2);
        expect(p2.getY()).toBe(3);
    });

})