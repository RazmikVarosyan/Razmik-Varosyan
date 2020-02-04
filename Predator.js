let LeavingCreator = require("./class")

module.exports = class Predator extends LeavingCreator{
    constructor(x,y,index){
        super(x,y,index);
        this.energy = 15;
        this.multiply = 2;
    }
    getNewCoordinates() {
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
            if (this.energy <= 0) {
                this.die();
         }

        }
    
    eat() {
        var newCell2 = super.chooseCell(2)
        var newCell = newCell2[Math.floor(Math.random() * newCell2.length)]; 
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
               
                for(var i in GrassArr){
                    if(GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY){
                        GrassEaterArr.splice(i,1)
                    }
                };
                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 17) {
                    this.mul();
                    this.energy = 10;
                }   
            }
            else {
                this.move();
            }
        }
        
    mul() {
        var newCell3 = super.chooseCell(2)
        var newCell = newCell3[Math.floor(Math.random() * newCell3.length)]; 
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            PredatorArr.push(new Predator(newX, newY, 3));
        }
    }
    
    die() {
        matrix[this.y][this.x] = 0;
        for(var i in PredatorArr){
            PredatorArr.splice(i,1)
        };
    }
}
