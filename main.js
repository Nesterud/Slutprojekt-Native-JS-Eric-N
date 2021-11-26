function rightOrWrong(){

let nummer = document.getElementById("nummer");

let randomNumber = Math.floor(5 * Math.random() + 1);

console.log(randomNumber);

if (randomNumber == nummer) {
    document.getElementById("demo").innerHTML = "Correct!";
}

if (0 > nummer < randomNumber){
    document.getElementById("demo").innerHTML = "Too low!";
}

if (6 > nummer > randomNumber > 0){
    document.getElementById("demo").innerHTML = "Too low!";
}

else {
    document.getElementById("demo").innerHTML = "Invalid input👿";
}

}