import React from "react";
import Game from './game';
import Tile from './tile';

class Board extends React.Component {

  render(){
    // debugger
    return(
      <div className='board'>
        {this.props.board.grid.map((whatever, i) => {
          return <ul key={i}>

            {whatever.map((aTile, j) => {
          // debugger
              return <Tile 
                key={j}
                tile={aTile}
                update={this.props.update}/>
              // debugger
              })}
          </ul>
              // debugger
        })}
      </div>
    );
  }
}

export default Board;