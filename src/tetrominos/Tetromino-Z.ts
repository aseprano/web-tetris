import { TetrominoBase } from "../Tetromino";
import { Point } from "../Point";
import { Z_P0, Z_P1, Z_P2, Z_P3 } from "./Tetromino-Z.positions";
/**
 * Tetromino Z - A tetromino with a Z shape
 *
 * Drawing path is 4 set of coordinates
 * representing the points in the field -2 +2
 *
 */
export class TetrominoZ extends TetrominoBase {
  protected positionsPoints: Point[][] = [Z_P0, Z_P1, Z_P2, Z_P3];
}
