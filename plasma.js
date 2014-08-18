var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//Background
context.fillStyle = "#eee";
context.fillRect(0, 0, canvas.width, canvas.height);

console.log("canvas " + canvas.width + "x" + canvas.height);


w = canvas.width;
h = canvas.height;

for (y = 0; y < h; y++) {
    for (x = 0; x < w; x++) {
        // convert scale -1 to +1 to 0-255:
        //color = Math.round(128.0 + (128.0 * Math.sin( (x+y) / 8.0)));

        // color = Math.round(128.0 + (128.0 * Math.sin(Math.sqrt((x - w / 2.0) * (x - w / 2.0) + (y - h / 2.0) * (y - h / 2.0)) / 8.0)));

        // color = Math.round(128.0 + (128.0 * Math.sin(x / 8.0)) + 128.0 + (128.0 * Math.sin(y / 8.0))) / 2;

        /*
        color = Math.round
        (
              128.0 + (128.0 * Math.sin(x / 16.0))
            + 128.0 + (128.0 * Math.sin(y / 8.0))
            + 128.0 + (128.0 * Math.sin((x + y) / 16.0))
            + 128.0 + (128.0 * Math.sin(Math.sqrt(x * x + y * y) / 8.0))
        ) / 4;
        */

        color = Math.round
        (
              128.0 + (128.0 * Math.sin(x / 16.0))
            + 128.0 + (128.0 * Math.sin(y / 32.0))
            + 128.0 + (128.0 * Math.sin(Math.sqrt((x - w / 2.0) * (x - w / 2.0) + (y - h / 2.0) * (y - h / 2.0)) / 8.0))
            + 128.0 + (128.0 * Math.sin(Math.sqrt(x * x + y * y) / 8.0))
        ) / 4;

        //console.log(color)

        context.fillStyle = "rgb("+color+","+color+","+color+")";
        context.fillRect(x, y, 1, 1);
    }
}
