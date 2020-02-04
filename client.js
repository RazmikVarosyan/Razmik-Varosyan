
var socket = io();
var side = 10;
function setup() {
    createCanvas(800, 800);
    background('#acacac');
}
function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var object = matrix[y][x];
            if (object == 1) {
                fill("green");
            }
            else if (object == 0) {
                fill('#acacac');
            }
            else if (object == 2) {
                fill('yellow');
            }
            else if (object == 3) {
                fill('red'); 
            }
            else if (object == 4) {
                fill('blue');         
            }
            else if (object == 5) {
                fill('orange');       
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on("Send Matrix", nkarel);



function Jrhexex() {
    socket.emit("Jrhexex")
}
// function addGrass() {
//     socket.emit("add grass")
// }
// function addGrassEater() {
//     socket.emit("add grassEater")
// } 