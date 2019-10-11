import { Tetromino } from "../src/Tetromino";

import { TetrominoL } from "../src/tetrominos/Tetromino-L";
import { L_P0, L_P1, L_P2, L_P3 } from "../src/tetrominos/Tetromino-L.positions";

describe("Tetromino-L", () => {
  it("should implement Tetramino", () => {
    const t = new TetrominoL();
    const x: Tetromino = { rotateRight: () => {}, rotateLeft: () => {}, getPoints: () => [] };

    expect(t).toBeTruthy();
    expect(typeof t).toEqual(typeof x);
  });

  it("should have an initial position of 0", () => {
    const t = new TetrominoL();
    expect(t.position).toBe(0);
    expect(t.getPoints()).toBe(L_P0);
  });

  it("should increase its position in range 0-3 when rotate right", () => {
    const t = new TetrominoL();
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

  it("should decrease its position in range 0-3 when rotate left", () => {
    const t = new TetrominoL();
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

  it("should rotate left", () => {
    const t = new TetrominoL();

    t.rotateLeft();

    const pos1 = t.position;
    const points1 = t.getPoints();
    expect(pos1).toEqual(3);
    expect(points1).toEqual(L_P3);
  });

  it("should rotate right", () => {
    const t = new TetrominoL();

    t.rotateRight();

    const pos1 = t.position;
    const points1 = t.getPoints();

    expect(pos1).toEqual(1);
    expect(points1).toEqual(L_P1);
  });

  it("should have consistent rotations", () => {
    const t = new TetrominoL();

    t.rotateLeft();
    t.rotateLeft();
    t.rotateRight();
    t.rotateLeft();

    expect(t.position).toEqual(2);
  });
});
