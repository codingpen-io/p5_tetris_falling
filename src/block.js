export default class Block {
  constructor(type) {
    if (type === "I") {
      this.arrTiles = [["_", "*"], ["_", "*"], ["_", "*"], ["_", "*"]];
    } else if (type === "J") {
      this.arrTiles = [["*", "*"], ["*", "_"], ["*", "_"], ["*", "_"]];
    } else if (type === "L") {
      this.arrTiles = [["*", "_"], ["*", "_"], ["*", "_"], ["*", "*"]];
    } else if (type === "O") {
      this.arrTiles = [["*", "*"], ["*", "*"], [".", "."], [".", "."]];
    } else if (type === "S") {
      this.arrTiles = [["*", "."], ["*", "*"], [".", "*"], [".", "."]];
    } else if (type === "T") {
      this.arrTiles = [["*", "."], ["*", "*"], ["*", "."], [".", "."]];
    } else if (type === "Z") {
      this.arrTiles = [[".", "*"], ["*", "*"], ["*", "."], [".", "."]];
    }
    this.row = 0;
    this.col = 3;
  }
  draw(p5, cellWidth, cellHeight) {
    //p5.stroke(255, 255, 255);
    //p5.fill(0, 255, 0);
    //p5.rect(this.col * cellWidth, this.row * cellHeight);
  }
}
