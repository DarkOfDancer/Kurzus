/*
var button = document.getElementsByTagName("button")[0];

document.addEventListener("mouseenter"mouseleaver, function() {
    console.log("CLICK!");
})
*/
var button = document.getElementById("enter");
var input= document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght() {
    return input.value.lenght;
}

function creatListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value= ""; 
}

function addListAfterClick() {
    if (inputLEnght() > 0) {
        creatListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLenght()> 0 && event.keyCode === 13) {
        creatListElement();
    }
}

button.addEventListener("click", addListAfterClick
   // console.log("Click is working!");
   //console.log(input.value);
);

input.addEventListener("keypress", addListAfterKeypress);