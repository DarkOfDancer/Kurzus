/*//scope
var b = "Can I access this?";
function bb() {
    var a = "hello";
}

//Root Scope(window)

var fun= 5;
function funFunction() {
    var fun ="hello";
    console.log(1, fun);
}


function funerFunction() {
    var fun ="Bye";
    console.log(2, fun);
}


function funestFunction() {
    fun ="Ah";
    console.log(3, fun);
}
console.log("window",fun);
funFunction();
funerFunction();
funestFunction();

var fun=5;
function funestFunction() {
    console.log(fun);
}

//condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";   

function condition() {
    if (isUserValid(true)) {
        return "You may enter";        
    }else{
        return "Access denied";
    }
}

var answer2 = condition();


function moveCommand(direction) {
    var whatHappens;
    switch(direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
                whatHappens = "please enter a valid direction";
                break;
        default:
            whatHappens = "Please enter a valid direction";
    }return whatHappens;
}


//let + const

const player = 'bobby'; //const: can't change
let experience = 100; //let: can change
let wizardlevel= false;

if (experience > 90) {
    let wizardlevel= true;
}

const obj = {
    player:'boby',
    experience: 100,
    wizardlevel:false,
}

//Destructuring

const obj = {
    player:'boby',
    experience: 100,
    wizardlevel:false,
}

const player = obj.player;
const experience= obj.experience;
let wizardlevel= obj.wizardlevel;

const {player, experience} = obj;
let {wizardlevel} = obj;

const name= 'John Winchester';

const obj = {
    [name]: 'hello',
    [1+2]:'hello'
}


const a= "Simon";
const b= true;
const c={};

const obj = {
    a,
    b,
    c
}


//Templete strings

const name= "Sally";
const age = 34;
const pet= "horse";
const greeting = "Hello"+ name+ "you seem to be doing"+ greeting +"!";

const greetingBest= `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;

//default aguments

function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`
};


var sym1 = Symbol();
var sym2= Symbol('foo');
var sym3= Symbol('foo');


//arrow function

function add(a,b) {
    return a+b;
}

const add2 = (a,b) => a+b;
*/