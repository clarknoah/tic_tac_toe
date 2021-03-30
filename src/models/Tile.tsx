class Tile {
    display: String;
    used: Boolean;
    constructor(){
        this.display = "";
        this.used = false;
    }
    
    setTile(input:String){
        this.display = input;
        this.used = true;
    }
    resetTile(){
        this.display = "";
        this.used = false;
    }
}

export default Tile;