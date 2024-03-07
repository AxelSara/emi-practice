const menuContent = () => {
    document.getElementById("menu-items").innerHTML = `
    <a href="./assets/pages/wave.html">Wave you</a>
    <a href="./assets/pages/exercise-1.html">Exercise 1</a>
    <a href="">Exercise 2</a>
    <a href="">Exercise 3</a>
    <a href="">Exercise 4</a>
    <a href="">Exercise 5</a>
    <a href="">Exercise 6</a>
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