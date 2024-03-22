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

const showData = (users) => {
    return users.map(user => `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td><img class="user-Avatar" src="${user.avatar}" alt="Avatar de ${user.first_name}"></td>
        </tr>
    `);
}

const printCards = (data) => document.getElementById("cards-user").innerHTML = data.join("");

const data = () =>{
    usersData("https://reqres.in/api/users?delay=3");
}

let realTime;
let counter=0;

const usersData = async (url) => {
    const users = await fetch(url);
    const userData = await users.json();
    localStorage.setItem("usersData", JSON.stringify(userData));
    printCards(showData(userData.data));
    const timeLocalStorage = new Date().getTime();
    if(counter === 0){
        localStorage.setItem("time",timeLocalStorage);
        const timeLocal = localStorage.getItem("time");
        realTime = timeLocalStorage;
        counter++;
    }else if(counter > 0){
        if(realTime + 60000 < timeLocalStorage){
            const users = await fetch(url);
            const userData = await users.json();
            localStorage.setItem("usersData", JSON.stringify(userData));
            printCards(showData(userData.data));
            localStorage.setItem("time",timeLocalStorage);
            const timeLocal = localStorage.getItem("time");
            document.getElementById("spinner").innerHTML = ``;
        }else{
            document.getElementById("spinner").innerHTML=`
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            `;
        }
    }
    document.getElementById("timeLocalStorage").innerHTML = new Date().toLocaleString();
}

const dataUsers = localStorage.getItem("usersData");