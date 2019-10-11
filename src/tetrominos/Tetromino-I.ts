import { TetrominoBase } from "./Tetromino";
import { Point } from "./Point";
import { I_P0, I_P1, I_P2, I_P3 } from "./Tetromino-I.positions";
/**
 * Tetromino I - A tetromino with a I shape
 *
 * Drawing path is 4 set of coordinates
 * representing the points in the field -2 +2
 *
 */
export class TetrominoI extends TetrominoBase {
  protected positionsPoints: Point[][] = [I_P0, I_P1, I_P2, I_P3];
}
