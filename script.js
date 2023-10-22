const anno = new Date(2023, 10, 22, 12, 57);
const myName = "Gabriel Nunes Silva";

document.getElementById("name").innerText = myName;

const timeElement = document.getElementById("year");
timeElement.innerText = anno.getFullYear();
