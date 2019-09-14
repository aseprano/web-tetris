import { TetrominoJ } from '../src/Tetromino-J';
import { Tetromino } from '../src/Tetromino';

describe('Tetromino-J', () => {

    it('should implement Tetramino', () => {
        
        const t = new TetrominoJ();
        const x: Tetromino = { rotateRight: () => {}, rotateLeft: () => {}, points: []};
        
        expect(t).toBeTruthy();
        expect(typeof t).toEqual(typeof x);
        
    });

    it('should have an initial position', () => {
        const t = new TetrominoJ();
        expect(t.position).toBe(0);
        expect(t.points).not.toBeNull();
    });

    it('should increment position when rotate right',  () => {
        const t = new TetrominoJ();
        const pos0 = t.position;
        t.rotateRight();
        const pos1 = t.position;
        expect(pos1).toEqual(pos0 + 1);
    });

    it('should decrement position when rotate left', () => {
        const t = new TetrominoJ();
        const pos0 = t.position;
        t.rotateLeft();
        const pos1 = t.position;
        expect(pos1).toEqual(pos0 - 1);
    });

    it('should rotate left', () => {
        const t = new TetrominoJ();
        const pos = t.position;
        const points = t.points;
        
        t.rotateLeft();
        
        const pos1 = t.position;
        const points1 = t.points;
        
        expect(pos).toEqual(pos1 + 1);
        expect(points).not.toEqual(points1);
    });

    it('should rotate right', () => {
        const t = new TetrominoJ();
        const pos = t.position;
        const points = t.points;
        
        t.rotateRight();
        
        const pos1 = t.position;
        const points1 = t.points;
        
        expect(pos).toEqual(pos1 - 1);
        expect(points).not.toEqual(points1);
    });
});
