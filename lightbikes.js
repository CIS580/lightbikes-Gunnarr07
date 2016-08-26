var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1 / 16 / 1000;

var x = 0;
var y = 0;

var input = {
    up: false,
    left: false,
    right: false,
    down: false,
}

window.onkeydown = function (event) {
    //up 38, 87
    //left 37, 65
    //right 39, 68
    //down 40, 83
    switch (event.keyCode) {
        // UP
        case 38:
        case 87:
            input.up = true;
            //y -= 1;
            break;
        // LEFT
        case 37:
        case 65:
            input.left = true;
            //x -= 1;
            break;
        // RIGHT    
        case 39:
        case 68:
            input.right = true;
            //x += 1;
            break;
        //DOWN
        case 40:
        case 83:
            input.down = true;
            //y += 1;
            break;

    }
}

window.onkeyup = function (event) {
    //up 38, 87
    //left 37, 65
    //right 39, 68
    //down 40, 83
    switch (event.keyCode) {
        // UP
        case 38:
        case 87:
            input.up = false;
            //y -= 1;
            break;
            // LEFT
        case 37:
        case 65:
            input.left = false;
            //x -= 1;
            break;
            // RIGHT    
        case 39:
        case 68:
            input.right = false;
            //x += 1;
            break;
            //DOWN
        case 40:
        case 83:
            input.down = false;
            //y += 1;
            break;

    }
}
function loop() {
    if (input.up) y -= 1;
    if (input.down) y += 1;
    if (input.left) x -= 1;
    if (input.right) x += 1;
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 5, 5);
    setTimeout(loop, speed);
}
loop();