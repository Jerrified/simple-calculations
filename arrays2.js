var colors = ["red", "orange", "yellow", "green", "blue"];

// console.log(colors[0]);

// console.log(colors[2]);

// colors[colors.length - 1] = "ultraviolet";

// console.log(colors);

var fourthColor = [colors[3]];

colors.push("white");

colors.unshift("black");

// colors.pop();
// console.log(colors.length);

for (var i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
}

for (var i = 0; i < colors.length; i++) {
    // console.log(i + ", " + colors[i]);
}

var lastColor = colors[colors.length - 1];

console.log(lastColor)