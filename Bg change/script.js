const body = document.querySelector("body");
const button = document.querySelector("button");


const backgroundİmages = ["red", "blue", "green", "grey", "pink"];


button.addEventListener("click", changeBackground);

function changeBackground() {
    // Rastgele arka plan fotosu
    const randomNumber = Math.floor(Math.random() * backgroundİmages.length);
    console.log(randomNumber);
    const img = backgroundİmages[randomNumber];
    body.style.backgroundColor = img;
}