import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from "./models/TicTacToe";
import Tile from "./components/Tile/Tile";

class App extends React.Component<{},{game:TicTacToe}>{
  constructor(props: any){
    super(props)
    this.state = {
      game: new TicTacToe("p1","p2")
    }
  }

  selectTile = (tile:number)=>{
    let game = this.state.game;
    console.log(tile);
    game.conductTurn(tile);
    this.setState({game})
  }


  render(){
    let game = this.state.game;
    let board = game.board.map((tile,index)=>{
      return (
              <Tile 
                display={tile.display} 
                number={index}
                onClick={this.selectTile}
              />
              )
    })
    return (
    <div className="App">
      <div>
   
      </div>
      <div className="Board">
        {board}
      </div>
    </div>
  );}
}

export default App;
