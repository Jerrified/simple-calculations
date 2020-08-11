var lamp = {
    name: "Larry",
    color: "Silver",
    sentence: function (){
        return this.name + " is my lamp. He is " + this.color + "." + " He is a very good lamp.";
    }
}


// for (x in lamp){
//     var txt = "";
//     txt += lamp[x] + " ";
//     console.log(txt);
// }

// console.log(lamp.sentence());

var myPenguin = {
    name: "Gunter",
    creator: "Pendolton Ward",
    origin: "Adventure Time",
}

// console.log("Hello, I'm a penguin and my name is" +  " " + myPenguin.name + ".");

myPenguin.canFly = false;

// console.log(myPenguin.canFly);

myPenguin.chirp = function(){
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
}

// console.log(myPenguin.chirp());

myPenguin.sayHello = function(){
    console.log("Hello, I'm a penguin and my name is" +  " " + this.name + ".");
}

myPenguin.name = "Penguin McPenguinFace";

// console.log(myPenguin.sayHello());

myPenguin.fly = function(){
    if (this.canFly == true) {
        console.log("I can fly!");
    } else {
        console.log("No flying for me!");
    }
}

myPenguin.canFly = true;

// console.log(myPenguin.fly());

