/*scope
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
funestFunction();*/

var fun=5;
function funestFunction() {
    console.log(fun);
}