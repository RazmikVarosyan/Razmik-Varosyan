let LeavingCreator = require("./class")
module.exports = class Hunter extends LeavingCreator{
    constructor(x,y,index){
        super(x,y,index);
        this.energy = 15;
        this.multiply = 0;
    }
    getNewCoordinates() {
                for (var x = 0; x < matrix[0].length; x++) {
                    this.directions.push([x, this.y]);
                }
            }
    move() {
            var newCell1 = super.chooseCell(0)
            var newCell2 = super.chooseCell(1);
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
                //this.eat(); ՝ս պետք չի կարծում եմ 
            }
            this.energy -- 
        }
    
    eat() {

        var xotakerner = super.chooseCell(2);
        var gishatichner = super.chooseCell(3);
       xotakerner.concat(gishatichner)
        var newCell = xotakerner[Math.floor(Math.random() * xotakerner.length)]
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in HunterArr){
                if(GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY){
                    GrassEaterArr.splice(i,1)
                }
                else  if(PredatorArr[i].x == newX && PredatorArr[i].y == newY){
                    PredatorArr.splice(i,1)
                }
            }
            
            this.energy ++;
            if(this.energy <= 5){
                this.die();
            }
         }
        else{
            this.move();
        } 
        // var finals0 = xotakerner.concat(gishatichner);
        // var finals = finals[Math.floor(Math.random() * finals0.length)]
        // for (var i in finals) {
        //     var verX = finals[i][0];
        //     var verY = finals[i][1];
        //     matrix[verY][verX] = 0;
        // }
        // this.energy++;
     
    }
    die() {
        matrix[this.y][this.x] = 0;
        for(var i in HunterArr){
            HunterArr.splice(i, 1);
        }
        this.energy == 0;
    }
}