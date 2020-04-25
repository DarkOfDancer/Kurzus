/*
//////1ST PART

4+3;

function sayHello() {
    console.log("Hello");
}
sayHello();

var sayBye= function(){
    console.log("Bye");
}
sayBye();

//////2ND PART

function sing() {
    console.log("HAAAAA");
    console.log("HEEEEEEEE");
}
sing();

function sing2(){
    console.log("lalalala");
    console.log("lasdsad");
}
sing2();


function sing(song) {
    console.log(song);
}

sing("asdas");
sing("asdas");
sing("asdas");

//////3RD PART

function multiply(a, b) {
    if (a>10||b>10){
        return "That's to hard";
    }else{
        return a*b;
    }
}
multiply(5,10);

function multiply(a, b) {
    return a*b;
}
var total= multiply(5,10);
alert(total);

//////4TH PART

 var listOfAnimals= ["tiger","cat","bear","bird"];
 console.log(listOfAnimals[0]);

 var functionList = [function apple() {
     console.log("apple")
 },function bread() {
     console.log("bread");
 }
];

var list= [
    ["tiger","cat","bear","bird"],["apple", "bread"]
];

console.log(list[1][1]);

var list= ["tiger","cat","bear","bird"];

//////5TH PART

var user = {
    name:"John Winchester",
    age:"34",
    hobby:"Killing monsters",
    isMarried: true,
    spells: ["abrakadabra","shazam","boo"],
    shout: function(){
        console.log("AAAHHHHH!");
    }
};

var list=[
    {
    username:"Karol",
    password:"secret",
    },
    {
        username:"Billy",
        password:"cisco",
    }

];

//////6TH PART

var datas = {
    username:"Sofia",
    password:"secret",
}

var database= [
    {
        username:"Sofia",
        password:"secret",
    }
];
var newsfeed= [
    {
        username:"Sofia",
        timeline:"loved",
    },
    {
        username:"Marcell",
        timeline:"loved",
    },
    {
        username:"Kriztan",
        timeline:"notloved",
    }
];

//////7TH PART

var userNamePrompt= prompt("What's your username?");
var passwordPrompt= prompt("What's your password");

function signIn(user, pass) {
    if(user === database[0].username && 
        pass === database[0].password){
            console.log(newsfeed)
        }else{
            alert("Sorry, wrong username or password!")
        }

};

signIn(userNamePrompt,passwordPrompt);

//////8TH PART

//function declaration
function newFunctoin(){

}

//function expression
var newFunctoin= function() {

};

//expression
1+3;
var a= 2;
return true;

//calling or invoking a function
alert()
newFunctoin(param1, param2);

//assign a variable
var a = true;

//function vs method
function thisIsAFunction(){

}

var abj= {
    thisIsAMethod: function(){
        
    }
}

thisIsAFunction()
obj.thisIsAMethod()*/