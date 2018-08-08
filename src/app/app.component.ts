import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  DIFFICULTY_LEVEL_MAP: any = {
    'Easy': 3,
    'Medium': 4,
    'Hard': 6
  }
  
  GAME_TIME_IN_SECONDS: number = 120;
  DIFFICULTY_LEVELS = Object.keys(this.DIFFICULTY_LEVEL_MAP);

  currentLevel: string = 'Easy';
  board: any = [];
  timers: NodeJS.Timer[] = [];
  currentTime: number;
  currentCell: any;
  currentScore: number;
  highScore: number;

  createBoard(noOfRowAndColumns: number){
    let board = [];
    let n = noOfRowAndColumns;
    for(let i = 0; i < n; i++){
      let row = [];
      for(let j =0; j < n; j++){
        row.push({x: i, y: j});
      }
      board.push(row);
    }
    return board;
  }

  constructor(){

  }
  ngOnInit(){
    this.getHighScore();
    this.startGame()
  }

  resetBoard(){
    this.board.length = 0;
    let noOfRowAndColumns = this.DIFFICULTY_LEVEL_MAP[this.currentLevel];
    this.board = this.createBoard(noOfRowAndColumns);
    this.currentCell = undefined;

  }
  startGame(){
    this.resetBoard();
    this.currentScore = 0;
    this.startTimer(this.GAME_TIME_IN_SECONDS);
    this.currentTime = this.GAME_TIME_IN_SECONDS;
  }


  getRandomCellCoordinates(){
    return {
      x: Math.floor(Math.random() * (this.DIFFICULTY_LEVEL_MAP[this.currentLevel])),
      y: Math.floor(Math.random() * (this.DIFFICULTY_LEVEL_MAP[this.currentLevel]))
    }
  }

  startTimer(intervalInSeconds: number){
    this.currentTime = intervalInSeconds;
    for(let i = 0; i < intervalInSeconds; i++){
      this.timers.push(setTimeout(() => {
        this.currentTime -= 1;
        this.currentCell = this.getRandomCellCoordinates();
      }, 1 * 1000 * i));
    }
    let gameTimer = setTimeout(() => {
      alert('‘Game Over !!!’')
      this.resetGame();
      this.startGame();
    }, intervalInSeconds * 1000);
    this.timers.push(gameTimer);
  }

  isCurrentCell(cell: any){
    return cell['x'] === this.currentCell['x'] && cell['y'] === this.currentCell['y'];
  }

  hitCell(cell: any){
    if (this.isCurrentCell(cell)){
      this.currentScore += 1;
    } else {
      this.currentScore -= 1;
    }
  }
  resetGame(){
    this.checkForHighScore();
    this.getHighScore();
    this.timers.map((id) => {
      clearInterval(id);
    });
  }

  getHighScore(){
    this.highScore = parseInt(localStorage.getItem("highScore")) || 0;
  }
  checkForHighScore(){
    if (this.currentScore > this.highScore){
      localStorage.setItem("highScore", this.currentScore.toString());
    } else {
      console.log('Nope')
    }
  }
}
