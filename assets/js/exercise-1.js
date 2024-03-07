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
