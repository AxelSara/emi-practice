

const menuContent = () => {
    document.getElementById("menu-items").innerHTML = `
    <a href="./wave.html">Wave you</a>
    <a href="./exercise-1.html">Exercise 1</a>
    <a href="./exercise-2.html">Exercise 2</a>
    <a href="./exercise-3.html">Exercise 3</a>
    <a href="./exercise-4.html">Exercise 4</a>
    <a href="./exercise-5.html">Exercise 5</a>
    <a href="./exercise-6.html">Exercise 6</a>
    <a href="./find-a-number.html">Guess a number</a>
    <a href="./cards.html">Cards</a>
    `;
}

const addButton = () => {
    const button = `
    <button type="button" class="btn btn-outline-success" onClick="correctNumber()"   >"Yeah, that's my number"</button>
    <button type="button" class="btn btn-outline-warning" onClick="higherNumber()"    >"No, my number it's higher"</button>
    <button type="button" class="btn btn-outline-warning" onClick="lowerNumber()"     >"No, my number it's lower"</button>
    `;
    return button;
}

const correctNumber = () => {
    document.getElementById("answer").innerHTML = `
        <p id="animated-text">Yeiii, I'm a genius</p>
    `;
    document.getElementById("range").innerHTML = `
        <p id="range">Think a number between <strong id="min">1</strong> to <strong id="max">100</strong</p>
    `;
}

const higherNumber = () => {
    const button = addButton();
    const min = parseInt(document.getElementById("number").innerHTML);
    const max = parseInt(document.getElementById("max").innerHTML);
    document.getElementById("min").innerHTML = min;
    let answer = parseInt((max-min)/2) + min;
    document.getElementById("answer").innerHTML = `
    <p>¿Tu número es <strong id="number">${answer}?</strong></p>
    ${button}
    `;
}

const lowerNumber = () => {
    const button = addButton();

    const max = parseInt(document.getElementById("number").innerHTML);
    const min = parseInt(document.getElementById("min").innerHTML);
    document.getElementById("max").innerHTML = max;

    let answer = parseInt((max-min)/2) + min;
    document.getElementById("answer").innerHTML = `
    <p>¿Tu número es <strong id="number">${answer}?</strong></p>
    ${button}
    `;
}

menuContent();
const printOutString = () => {
    let min = 0;
    let max = 100;
    let answer = parseInt(Math.random()*(max-min)+min);
    const button = addButton();
    document.getElementById("answer").innerHTML = `
        <p>¿Tu número es <strong id="number">${answer}?</strong></p>
        ${button}
    `;
}