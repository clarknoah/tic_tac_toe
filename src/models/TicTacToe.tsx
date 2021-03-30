import Player from "./Player"
import Tile from "./Tile";

class TicTacToe {
    board: Array<Tile>;
    p1: Player;
    p2: Player;
    currentTurn: Player;
    winningStates: Array<Array<number>>;
    selectedTiles: number;
    winnerOfRound: string;
    gameInPlay: boolean;
    constructor(p1:string, p2: string){
        this.winningStates = this.setWinningStates();
        this.p1 = new Player(p1, "X","p1");
        this.p2 = new Player(p2, "O","p2");
        this.currentTurn = this.p1;
        this.board = this.createNewBoard();
        this.selectedTiles = 0;
        this.winnerOfRound = "";
        this.gameInPlay = false;
    }

    setWinningStates(){
        let states : Array<Array<number>> = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        return states;
    }

    createNewBoard(){
        let board: Array<Tile> = [];
        for(let i = 0; i < 9; i++){
            board.push(new Tile());
        }
        return board;
    }

    startNewGame(){
        this.gameInPlay = true;
    }

    changePlayer(){
        if(this.currentTurn.id == "p1"){
            this.currentTurn = this["p2"]
        }else{
            this.currentTurn = this["p1"]
        }
    }

    conductTurn(location:number){
        this.selectLocation(location);
        let wonGame: boolean = this.checkForWinner();
        if(wonGame){
            this.setWinner();
            this.endGame()
        }else if(this.selectedTiles < 9){
            this.changePlayer();
        }else{
            this.endGame();
        }
        //Select player locatin
        //Determine if win on this turn
        //If win end game
        //If not win and more tiles, change to other player
        //If not win and end of tiles, end game as tie
    }

    selectLocation(location: number){
        this.board[location].setTile(this.currentTurn.symbol);
        this.selectedTiles++;
        this.checkForWinner();
    }

    checkForWinner(){

        return false;
    }


    setWinner(){
        //this[this.currentTurn.id].addWin();
    }

    endGame(){
        this.gameInPlay = false;
        if(this.winnerOfRound.length == 0){
            this.winnerOfRound = 
        }
    }

    assignWinner(){

    }

}


export default TicTacToe;