import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  currentPlayer: string = 'O';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  processPlay(line: number, col: number) {
    //console.log(`jogada na linha ${line} coluna ${col} do jogador ${this.currentPlayer}`);
    if (this.board[line][col] === '' && this.winner === '') {
      this.board[line][col] = this.currentPlayer;
      // verificar vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }
      if (this.currentPlayer === 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(currentPlayer: string): boolean {
    for (let index = 0; index < this.board.length; index++) {
      if (
        this.board[index][0] === currentPlayer &&
        this.board[index][1] === currentPlayer &&
        this.board[index][2] === currentPlayer
      ) {
        return true;
      }
    }
    for (let index = 0; index < this.board.length; index++) {
      if (
        this.board[0][index] == currentPlayer &&
        this.board[1][index] == currentPlayer &&
        this.board[2][index] == currentPlayer
      ) {
        return true;
      }
    }
    // valida a primeira diagonal
    if (
      this.board[0][0] == currentPlayer &&
      this.board[1][1] == currentPlayer &&
      this.board[2][2] == currentPlayer
    ) {
      return true;
    }
    // valida a segunda diagonal
    if (
      this.board[0][2] == currentPlayer &&
      this.board[1][1] == currentPlayer &&
      this.board[2][0] == currentPlayer
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
