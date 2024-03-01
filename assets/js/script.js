function changeName(){
    const name = prompt("What's your name?")
    document.getElementById("name").innerHTML = "Hello "+name;
}