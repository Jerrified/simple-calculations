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
    habit: "Stealing",
    greeting: function(){
        return "Hello, I'm a penguin and my name is [NAME HERE]!";
    },
    canFly: false,
    chirp: function(){
        return "CHIRP CHIRP! Is this what penguins sound like?";
    },
    sayHello: function(){
        return "Hello, I'm a penguin and my name is " + this.name + ".";
    },
    fly: function(){
        if (canFly == true) {
            "I can fly!";
        } else {
            "No flying for me!";
        }
    }
}

console.log(myPenguin.sayHello());