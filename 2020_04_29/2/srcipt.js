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
*/

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