import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper.js';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Minesweeper.Board(9, 10)};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, bool) {
    if (bool) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({board: this.state.board});
  }

  render() {
    return(
      <div>
        RENDER FROM GAME.JSX
        <Board
          board={this.state.board}
          update={this.updateGame}>
          </Board>
      </div>
    );
  }
}

export default Game;