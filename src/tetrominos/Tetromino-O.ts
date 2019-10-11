import { TetrominoBase } from "./Tetromino";
import { Point } from "./Point";
import { O_P0, O_P1, O_P2, O_P3 } from "./Tetromino-O.positions";
/**
 * Tetromino O - A tetromino with a O shape
 *
 * Drawing path is 4 set of coordinates
 * representing the points in the field -2 +2
 *
 */
export class TetrominoO extends TetrominoBase {
  protected positionsPoints: Point[][] = [O_P0, O_P1, O_P2, O_P3];
}
