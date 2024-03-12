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
const printOutString = () => {
    const input = parseInt(document.getElementById("inputArray").value);
    const arr = [];
    let sum = 0;
    let product = 1;
    if(input > 0){
        const numString = input.toString();
        for (const value of numString) {
            arr.push(value);
            sum += parseInt(value);
            product *= parseInt(value);
        }
        document.getElementById("message1").innerHTML = `Sum of the array: ${sum} and the product of the array: ${product}`;
    }else{
        document.getElementById("message1").innerHTML = "he value is not a number";
    }
}