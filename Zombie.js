let LeavingCreator = require("./class")
module.exports = class Zombie extends LeavingCreator {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
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
        var newCell1 = super.chooseCell(0)
        var newCell2 = super.chooseCell(1)  
        var newCell3 = []
        newCell3.concat(newCell1,newCell2)
        var newCell = newCell3[Math.floor(Math.random() * newCell3.length)]
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
        var newCell1 = super.chooseCell(2)
        var newCell2 = super.chooseCell(3)
        newCell1.concat(newCell2)
        var newCell5 = newCell1[Math.floor(Math.random() * newCell1.length)]
        
            if (newCell5) {
                var newX = newCell5[0];
                var newY = newCell5[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                for (var i in ZombieArr){
                    if(GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY){
                        GrassEaterArr.splice(i,1)
                    }
                    else  if(PredatorArr[i].x == newX && PredatorArr[i].y == newY){
                        PredatorArr.splice(i,1)
                    }
                }
                
                this.energy++;
               
                if (this.energy >= 15) {
                    this.mul();
                    this.energy = 10
                }
    
            }
            else {
                this.move();
            }
        }

    mul() {
        var newCell2 = super.chooseCell(5)
        var newCell = newCell2[Math.floor(Math.random() * newCell2.length)]; 
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            ZombieArr.push(new Zombie(newX, newY, 5))
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in ZombieArr) {
            ZombieArr.splice(i, 1);
        }
    }
}