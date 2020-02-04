module.exports = class LeavingCreator{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [];
    }

    getNewDirections(){
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
    }
    
    chooseCell(num) {
        this. getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push(this.directions[i]);
                }
                else if (matrix[y][x].index == num) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
}



// class Grass {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.multiply = 0;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(num) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == num) {
//                     found.push([x, y]);
//                 }
//             }

//         }
//         return found;
//     }
//     mul() {
//         this.multiply++;
//         var newCell = random(this.chooseCell(0));

//         if (newCell && this.multiply >= 6) {
//             var newX = newCell[0];
//             var newY = newCell[1];

//             matrix[newY][newX] = new Grass(newX, newY, 1);
//             this.multiply = 0;

//         }
//     }


// }


// class GrassEater {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 12;
//         this.index = index;
//         this.directions = [];
//         this.acted = false;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x, this.y - 1],
//             [this.x-1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x - 1, this.y+1],
//             [this.x, this.y+1],
//             [this.x + 1, this.y + 1],
//             [this.x+1, this.y],
//             [this.x + 1, this.y - 1],
//             [this.x, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x - 2, this.y - 2],
//             [this.x - 2, this.y - 1],
//             [this.x - 2, this.y],
//             [this.x - 2, this.y + 1],
//             [this.x - 2, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x + 2, this.y + 1],
//             [this.x + 2, this.y],
//             [this.x + 2, this.y - 1],
//             [this.x + 2, this.y - 2],
//             [this.x + 1, this.y - 1]
//         ];

//     }
//     chooseCell(num) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == num) {
//                     found.push([x, y]);
//                 }
//                 else if (matrix[y][x].index == num) {
//                     found.push([x, y]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {
//         var newCell = random(this.chooseCell(0));
//         if (this.acted == false) {
//             if (newCell) {
//                 var newX = newCell[0];
//                 var newY = newCell[1];
//                 matrix[newY][newX] = matrix[this.y][this.x];
//                 matrix[this.y][this.x] = 0;
//                 this.x = newX;
//                 this.y = newY;
//                 this.energy--;
//                 this.acted = true;
//                 if (this.energy == 0) {
//                     this.die();
//                 }
//             }

//         }
//     }
//     eat() {
//         var newCell = random(this.chooseCell(1));
//         if (this.acted == false) {
//             if (newCell) {
//                 var newX = newCell[0];
//                 var newY = newCell[1];
//                 matrix[newY][newX] = matrix[this.y][this.x];
//                 matrix[this.y][this.x] = 0;
//                 this.x = newX;
//                 this.y = newY;
//                 this.energy++;
//                 this.acted = true;
//                 if (this.energy >= 14) {
//                     this.mul();
//                     this.energy = 6;
//                 }
//             }
//             else {
//                 this.move();
//             }

//         }

//     }


//     mul() {
//         var newCell = random(this.chooseCell(0));
//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = new GrassEater(newX, newY, 2);
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//     }

// }


// class Predator {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 15;
//         this.multiply = 2;
    
//         // this.directionsMul = [
//         //     [this.x - 1, this.y - 1],
//         //     [this.x, this.y - 1],
//         //     [this.x + 1, this.y - 1],
//         //     [this.x - 1, this.y],
//         //     [this.x + 1, this.y],
//         //     [this.x - 1, this.y + 1],
//         //     [this.x, this.y + 1],
//         //     [this.x + 1, this.y + 1]
//         // ];
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x, this.y - 1],
//             [this.x-1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x - 1, this.y+1],
//             [this.x, this.y+1],
//             [this.x + 1, this.y + 1],
//             [this.x+1, this.y],
//             [this.x + 1, this.y - 1],
//             [this.x, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x - 2, this.y - 2],
//             [this.x - 2, this.y - 1],
//             [this.x - 2, this.y],
//             [this.x - 2, this.y + 1],
//             [this.x - 2, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x + 2, this.y + 1],
//             [this.x + 2, this.y],
//             [this.x + 2, this.y - 1],
//             [this.x + 2, this.y - 2],
//             [this.x + 1, this.y - 1]
//         ];

//     }
//     chooseCell(num) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == num) {
//                     found.push([x, y]);
//                 }
//                 else if (matrix[y][x].index == num) {
//                     found.push([x, y]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {
//         var newCell = random(this.chooseCell(0));
//         if (this.acted == false) {
//             if (newCell) {
//                 var newX = newCell[0];
//                 var newY = newCell[1];
//                 matrix[newY][newX] = matrix[this.y][this.x];
//                 matrix[this.y][this.x] = 0;
//                 this.x = newX;
//                 this.y = newY;
//                 this.acted = true;

//             }
//             this.energy--;
//             if (this.energy <= 0) {
//                 this.die();
//             }

//         }


//     }
//     eat() {
//         var newCell = random(this.chooseCell(2));
//         if (this.acted == false) {
//             if (newCell) {
//                 var newX = newCell[0];
//                 var newY = newCell[1];
//                 matrix[newY][newX] = matrix[this.y][this.x];
//                 matrix[this.y][this.x] = 0;
//                 this.x = newX;
//                 this.y = newY;
//                 this.energy++;
//                 if (this.energy >= 17) {
//                     this.mul();
//                     this.energy = 10;
//                 }
//                 this.acted = true;
//             }
//             else {
//                 this.move();
//             }
//         }
//     }
//     mul() {
//         var newCell = random(this.chooseCell(2));
//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = new Predator(newX, newY, 3);
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//     }
// }

// class Hunter {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 15;
//         this.multiply = 0;
//         this.directions = [];

//     }
//     getNewCoordinates() {
//         for (var x = 0; x < matrix[0].length; x++) {
//             this.directions.push([x, this.y]);
//         }
//     }
//     chooseCell(num) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == num) {
//                     found.push([x, y]);
//                 }
//                 else if (matrix[y][x].index == num) {
//                     found.push([x, y]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {
//         if (this.acted == false) {

//             var newCell = random(this.chooseCell(0));
//             var newCell1 = random(this.chooseCell(1));

//             var f = random([newCell, newCell1]);
//             if (f) {
//                 var newX = f[0];
//                 var newY = f[1];
//                 matrix[newY][newX] = matrix[this.y][this.x];
//                 matrix[this.y][this.x] = 0;
//                 this.x = newX;
//                 this.y = newY;
//                 this.eat();
//                 this.acted = true;

//             }
//         }
//     }
//     eat() {

//         var xotakerner = this.chooseCell(2);
//         var gishatichner = this.chooseCell(3);
//         var finals = xotakerner.concat(gishatichner);
//         for (var i in finals) {
//             var verX = finals[i][0];
//             var verY = finals[i][1];
//             matrix[verY][verX] = 0;
//         }
//         this.energy++;
//     }
//     // mul(){
//     //     var newCell = random(this.chooseCell([2,3]));
//     //     if (newCell) {
//     //         var newX = newCell[0];
//     //         var newY = newCell[1];
//     //         matrix[newY][newX] = new Hunter(newX, newY, 4);
//     //     }
//     // }
//     die() {
//         matrix[this.y][this.x] = 0;
//     }
// }


// class Zombie {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 10;
//         this.directions = [];
//     }
//     getNewCoordinates(){
//         this.directions = [
//             [this.x, this.y - 1],
//             [this.x-1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x - 1, this.y+1],
//             [this.x, this.y+1],
//             [this.x + 1, this.y + 1],
//             [this.x+1, this.y],
//             [this.x + 1, this.y - 1],
//             [this.x, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x - 2, this.y - 2],
//             [this.x - 2, this.y - 1],
//             [this.x - 2, this.y],
//             [this.x - 2, this.y + 1],
//             [this.x - 2, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x + 2, this.y + 1],
//             [this.x + 2, this.y],
//             [this.x + 2, this.y - 1],
//             [this.x + 2, this.y - 2],
//             [this.x + 1, this.y - 1]
//         ];
//     }
//     chooseCell(num) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == num) {
//                     found.push([x, y]);
//                 }
//                 else if (matrix[y][x].index == num) {
//                     found.push([x, y]);
//                 }
//             }
//         }
//         return found;
//     }
    // move() {
    //     var newCell = random(this.chooseCell(0));
    //     var newCell1 = random(this.chooseCell(1));
    //     var m = random([newCell, newCell1]);
    //     if (this.acted == false) {
    //         if (m) {
    //             var newX = m[0];
    //             var newY = m[1];
    //             matrix[newY][newX] = matrix[this.y][this.x];
    //             matrix[this.y][this.x] = 0;
    //             this.x = newX;
    //             this.y = newY;
    //             this.acted = true;

    //         }
    //         this.energy--;
    //         if (this.energy <= 0) {
    //             this.die();
    //         }

    //     }
    // }
    // eat() {
    //     var newCell = random(this.chooseCell(2));
    //     var newCell1 = random(this.chooseCell(3));
    //     var t = random([newCell, newCell1]);
    //     if (this.acted == false) {
    //         if (t) {
    //             var newX = t[0];
    //             var newY = t[1];
    //             matrix[newY][newX] = matrix[this.y][this.x];
    //             matrix[this.y][this.x] = 0;
    //             this.x = newX;
    //             this.y = newY;
    //             this.acted = true;
    //             this.energy++;
                
    //             this.mul();
    //         }
    //         else {
    //             this.move();
    //         }
    //     }
    // }

    // mul() {
    //     var newCell = random(this.chooseCell(4));
    //     if (newCell) {


    //         var newX = newCell[0];
    //         var newY = newCell[1];
    //         matrix[newY][newX] = new Zombie(newX, newY, 5);

    //     }
    // }
    // die() {
    //     matrix[this.y][this.x] = 0;
    // }
// }

