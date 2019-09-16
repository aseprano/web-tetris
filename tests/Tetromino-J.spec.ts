import { TetrominoJ } from '../src/Tetromino-J';
import { Tetromino } from '../src/Tetromino';
import { J_P0, J_P1, J_P2, J_P3} from '../src/Tetromino-J.positions';

describe('Tetromino-J', () => {

    it('should implement Tetramino', () => {
        
        const t = new TetrominoJ();
        const x: Tetromino = { rotateRight: () => {}, rotateLeft: () => {}, points: []};
        
        expect(t).toBeTruthy();
        expect(typeof t).toEqual(typeof x);
        
    });

    it('should have an initial position of 0', () => {
        const t = new TetrominoJ();
        expect(t.position).toBe(0);
        expect(t.points).not.toBeNull();
    });

    it('should increase its position in range 0-3 when rotate right',  () => {
        const t = new TetrominoJ();
        t.rotateRight();

        const pos1 = t.position;
        expect(pos1).toEqual(1);
        t.rotateRight();
        const pos2 = t.position;
        expect(pos2).toEqual(2);
        t.rotateRight();
        const pos3 = t.position;
        expect(pos3).toEqual(3);
        t.rotateRight();
        const pos4 = t.position;
        expect(pos4).toEqual(0);
        t.rotateRight();
        const pos5 = t.position;
        expect(pos5).toEqual(1);
    });

    it('should decrease its position in range 0-3 when rotate left', () => {
        const t = new TetrominoJ();
        t.rotateLeft();
        const pos1 = t.position;
        expect(pos1).toEqual(3);
        t.rotateLeft();
        const pos2 = t.position;
        expect(pos2).toEqual(2);
        t.rotateLeft();
        const pos3 = t.position;
        expect(pos3).toEqual(1);
        t.rotateLeft();
        const pos4 = t.position;
        expect(pos4).toEqual(0);
        t.rotateLeft();
        const pos5 = t.position;
        expect(pos5).toEqual(3);
    });

    it('should rotate left', () => {
        const t = new TetrominoJ();

        t.rotateLeft();
        
        const pos1 = t.position;
        const points1 = t.points;
        expect(pos1).toEqual(3);
        expect(points1).toEqual(J_P3);
    });

    it('should rotate right', () => {
        const t = new TetrominoJ();

        t.rotateRight();
        
        const pos1 = t.position;
        const points1 = t.points;
        
        expect(pos1).toEqual(1);
        expect(points1).toEqual(J_P1);
    });

    it('should have consistent rotations', () => {

        const t = new TetrominoJ();

        t.rotateLeft();
        t.rotateLeft();
        t.rotateRight();
        t.rotateLeft();

        expect(t.position).toEqual(2);
    });
});
