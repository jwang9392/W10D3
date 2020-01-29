import React from "react";

class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      explored: this.props.tile.explored, 
      flagged: this.props.tile.flagged
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const currentState = this.state.explored;
    this.props.update(this.props.tile, e.altKey);
    // debugger
  }

  render() {
    let status = this.props.tile;
// debugger
    return (
      <li
        className={
          "tile " +
          (status.bombed ? "bombed " : "") +
          (status.explored ? "explored " : "") +
          (status.flagged ? "flagged " : "")
        }
        // onClick = {(e) => {
        //   this.handleClick(e);
        // }}
        onClick = {this.handleClick}
      ></li>
    );
  }
}

export default Tile;
