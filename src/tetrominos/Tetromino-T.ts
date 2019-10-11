import { TetrominoBase } from "../Tetromino";
import { Point } from "../Point";
import { T_P0, T_P1, T_P2, T_P3 } from "./Tetromino-T.positions";
/**
 * Tetromino T - A tetromino with a T shape
 *
 * Drawing path is 4 set of coordinates
 * representing the points in the field -2 +2
 *
 */
export class TetrominoT extends TetrominoBase {
  protected positionsPoints: Point[][] = [T_P0, T_P1, T_P2, T_P3];
}
