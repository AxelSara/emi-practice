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
// let arr = ["This", "is", "a", "sentence."];
// const printOutString = (arr) => {
//   console.log(arr);
//     let sentence="";
//   for(let i = 0; i < arr.length; i++){
//     sentence += arr[i] + " ";
//   }
//   return document.getElementById(Array).innerHTML = sentence;
// }
/*-----------------------------for--------------------------- */
const printOutString = () => {
let arr = ["This", "is", "a", "sentence."];
  console.log(arr);
    let sentence="";
  for(let i = 0; i < arr.length; i++){
    sentence += arr[i] + " ";
  }
  document.getElementById("array").innerHTML = sentence;
  /*----------------------Join method----------------------- */
  document.getElementById("arrayJoin").innerHTML = arr.join(" ");
}
