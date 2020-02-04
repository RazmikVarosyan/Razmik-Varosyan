let LeavingCreator = require("./class")
module.exports = class GrassEater extends LeavingCreator{
    constructor(x,y,index){
        super(x,y,index);
        this.energy = 12;
    }
    getNewCoordinates(){
        this.directions = [
            [this.x, this.y - 1],
            [this.x-1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y+1],
            [this.x, this.y+1],
            [this.x + 1, this.y + 1],
            [this.x+1, this.y],
            [this.x + 1, this.y - 1],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 1]
        ];
    }
 
    move() {

        var newCell0 = super.chooseCell(0)
        var newCell = newCell0[Math.floor(Math.random() * newCell0.length)]; 
        
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                }  
                this.energy--; 
                if (this.energy == 0) {
                    this.die();
            }
        }
    

    eat() {
        var newCell0 = super.chooseCell(1)
        var newCell = newCell0[Math.floor(Math.random() * newCell0.length)]; 

            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                
                for(var i in GrassArr){
                    if(GrassArr[i].x == newX && GrassArr[i].y == newY){
                        GrassArr.splice(i,1)
                    }
                };
                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 14) {
                    this.mul();
                    this.energy = 6;
                }
                
            }
            else {
                this.move();
            }
        }


    mul() {
        var newCell1 = super.chooseCell(0)
        var newCell = newCell1[Math.floor(Math.random() * newCell1.length)]; 
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2
            GrassEaterArr.push(new GrassEater(newX, newY, 2));
            this.energy = 6
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for(var i in GrassEaterArr){
            if(GrassEaterArr[i].x == this.x && GrassEaterArr[i].y == this.y){
                 GrassEaterArr.splice(i,1);
            }
        }
    }
}