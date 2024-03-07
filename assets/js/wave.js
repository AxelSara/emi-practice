const menuContent = () => {
    document.getElementById("menu-items").innerHTML = `
    <a href="./wave.html">Wave you</a>
    <a href="./exercise-1.html">Exercise 1</a>
    <a href="./exercise-2.html">Exercise 2</a>
    <a href="./exercise-3.html">Exercise 3</a>
    <a href="./exercise-4.html">Exercise 4</a>
    <a href="./exercise-5.html">Exercise 5</a>
    <a href="./exercise-6.html">Exercise 6</a>
    `;
}
menuContent();
const lan = [
    esp = "Hola ",
    eng = "Hello ",
    ger = "Hallo ",
    jap = "こんにちは ",
    fra = "Bonjour ",
    ita = "Chiao ",
    chi = "你好 ",
    pol = "Cześć "
]
let i=0;
function changeName(){
    const name = prompt("What's your name?");
    if(name){
        changeLan(name);
    }
}
const changeLan = (name) => {
    if(i<lan.length){
        document.getElementById("name").innerHTML = lan[i] + name;
        setTimeout(() => {
            changeLan(name, i++)
        }, 1000);
    }
}