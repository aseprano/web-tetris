import { TetrominoBase } from "../Tetromino";
import { Point } from "../Point";
import { S_P0, S_P1, S_P2, S_P3 } from "./Tetromino-S.positions";
/**
 * Tetromino S - A tetromino with a S shape
 *
 * Drawing path is 4 set of coordinates
 * representing the points in the field -2 +2
 *
 */
export class TetrominoS extends TetrominoBase {
  protected positionsPoints: Point[][] = [S_P0, S_P1, S_P2, S_P3];
}
