import { TetrominoBase } from './Tetromino';
import { Point } from './Point';
import { J_P0, J_P1, J_P2, J_P3 } from './Tetromino-J.positions';
/**
 * Tetromino J - A tetromino with a J shape
 * 
 * Drawing path is 4 set of coordinates 
 * representing the points in the field -2 +2
 * 
 */
export class TetrominoJ extends TetrominoBase {
    protected positionsPoints: Point[][] = [J_P0, J_P1, J_P2, J_P3];
}