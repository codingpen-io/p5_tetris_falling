import Block from "./gamemap";

export default class GameMap {
  constructor(p5, width, height) {
    this.row = 22;
    this.column = 12;
    this.width = width;
    this.height = height;
    this.cellWidth = this.width / this.column;
    this.cellHeight = this.height / this.row;
    this.arrRow = [];
    this.lastTime = 0;
    this.arrBlocks = [];
    this.newBlockType = "";
    for (let i = 0; i < this.row; i++) {
      let column = [];
      for (let j = 0; j < this.column; j++) {
        if (i === 0 || j === 0 || j === this.column - 1 || i === this.row - 1)
          column.push("#");
        else column.push(" ");
      }
      this.arrRow.push(column);
    }
  }
  draw(p5) {
    p5.stroke(255, 0, 0);
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        let cell = this.arrRow[i][j];
        if (cell === "#") {
          p5.fill(102);
        } else if (cell === "I") {
          p5.fill(0, 255, 255);
        } else {
          p5.noFill();
        }
        p5.rect(
          j * this.cellWidth,
          i * this.cellHeight,
          this.cellWidth,
          this.cellHeight
        );
        //p5.rect(i * this.cellWidth, 0, this.cellWidth, this.cellHeight);
      }
    }
    let elapsed = p5.millis() - this.lastTime;
    p5.fill("yellow");
    if (elapsed > 3000) {
      //p5.text("time" + elapsed, 100, 100);
      //console.log("generate block")
      this.lastTime = p5.millis();
      this.generateBlock();
    }
    //console.log(this.arrBlocks.length);
    // for (let block of this.arrBlocks) {
    //   //console.log(block.column, block.row);
    //   ///p5.rect(block.column * this.cellWidth, block.row * this.cellHeight, this.cellWidth, this.cellHeight)
    //   //block.draw(p5, this.cellWidth, this.cellHeight);
    // }
    p5.text("New Block" + this.newBlockType, this.width + 100, 100);
  }
  generateBlock() {
    if (this.arrBlocks.length === 0) {
      let newBlock = new Block("I");
      console.log(newBlock.row, newBlock.col);
      this.arrBlocks.push(newBlock);
    }
  }
}
