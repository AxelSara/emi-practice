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
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];
    const array = [];
    for (const subject1 of student1Courses) {
        for (const subject2 of student2Courses) {
            if(subject1 === subject2) array.push(subject1);
        }
    }
    document.getElementById("message").innerHTML = array;
}