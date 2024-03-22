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
  menuContent();
  const printOutString = () => {
    let arr = parseInt(document.getElementById("inputArray").value);
    let array = [];
    let arrayDouble = [];
    let arrayMap = [];
    if(arr > 0){
      let num = arr.toString();
      for (const digit of num) {
        array.push(digit);
        arrayDouble.push(digit*2);
      }
      arrayMap = array.map( (num) => num*2);
      document.getElementById("message1").innerHTML = `[${arrayDouble}]`;
      document.getElementById("message2").innerHTML = `[${arrayMap}]`;
    }else{
      document.getElementById("message1").innerHTML = "The value is not a number";
      document.getElementById("message2").innerHTML = "The value is not a number";
    }
  }
