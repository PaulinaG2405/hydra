
let n = 0;
function menuedit() {
let menueditar = document.getElementById("edit");
    if (n == 0) {
        menueditar.style.opacity = "1";
        menueditar.style.visibility = "visible";
        n = 1;
    } else {
        menueditar.style.opacity = "0";
        menueditar.style.visibility = "hidden";
        n = 0;
    }
}

const main = document.getElementById("main")
const header = document.getElementById("header")
const footer = document.getElementById("footer")
const body = document.getElementById('body');

selector.addEventListener('input', (event) => {
    header.style.backgroundColor = event.target.value; // Cambia el fondo
    main.style.backgroundColor = event.target.value; // Cambia el fondo
    footer.style.backgroundColor = event.target.value; // Cambia el fondo
});


selector2.addEventListener('input', (event) => {
    body.style.backgroundColor = event.target.value; // Cambia el fondo
});