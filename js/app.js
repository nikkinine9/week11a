document.getElementById("date-time").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}

function myFunction() {
    alert("You pressed a key inside the input field");
}

function myFunction(event) {
    var x = event.which || event.keyCode;
    document.getElementById("demo2").innerHTML = "The Unicode value is: " + x;
    document.getElementById("demo2").style.color = "red";
}