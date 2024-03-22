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
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    const peopleDani = [];
    const peopleJuan = [];
    let list = "";
    let listDani = "";
    let listJuan = "";
    let listName = "";
    for (const person of people) {
        list += `<li class="list-order">${person}</li>`;
    }
    document.getElementById("list").innerHTML = list;
    for (let i = 0; i < people.length; i++) {
        if(people[i] !== "Dani") peopleDani.push(people[i]);
    }
    for (const person of peopleDani) {
        listDani += `<li class="list-order">${person}</li>`;
    }
    document.getElementById("list-Dani").innerHTML = listDani;
    for (let i = 0; i < peopleDani.length; i++) {
        if(peopleDani[i] !== "Juan") peopleJuan.push(people[i]);
    }
    for (const person of peopleJuan) {
        listJuan += `<li class="list-order">${person}</li>`;
    }
    document.getElementById("list-Juan").innerHTML = listJuan;
    peopleJuan.push("Axel");
    for (const person of peopleJuan) {
        listName += `<li class="list-order">${person}</li>`;
    }
    document.getElementById("list-Name").innerHTML = listName;
}