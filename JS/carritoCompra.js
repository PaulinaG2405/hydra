const plantilla = document.getElementsByClassName('plantilla-1');
const carritoC = document.getElementsByClassName('carritoBtn');

function AgregarAlCarrito(plantilla){
    carritoC = JSON.parse(localStorage.getItem('carrito') || []);
    carritoC.push(plantilla);
    localStorage.setItem('carrito', JSON.stringify(carritoC));
    alert(plantilla + 'se ha añadido al carrito');
}

function CargarCarrito(){
    carritoC = JSON.parse(localStorage.getItem('carrito')) || [];
    let listaProdcutos = document.getElementById('carrito');
    carrito.innerHtml
}
