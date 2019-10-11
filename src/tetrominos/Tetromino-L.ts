import { TetrominoBase } from "../Tetromino";
import { Point } from "../Point";
import { L_P0, L_P1, L_P2, L_P3 } from "./Tetromino-L.positions";
/**
 * Tetromino L - A tetromino with a L shape
 *
 * Drawing path is 4 set of coordinates
 * representing the points in the field -2 +2
 *
 */
export class TetrominoL extends TetrominoBase {
  protected positionsPoints: Point[][] = [L_P0, L_P1, L_P2, L_P3];
}
