class Player {
    wins: number;
    ties: number;
    symbol: string;
    name: string;
    id: string;
    constructor(name: string, symbol:string, id:string){
        this.wins = 0;
        this.ties = 0;
        this.symbol = symbol;
        this.name = name;
        this.id = id;
    }

    addWin(){
        this.wins++;
    }
}

export default Player;