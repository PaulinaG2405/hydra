//Variable para almacenar la compra 
const compraHecha = localStorage.getItem('comprarBtn');
const carrito = localStorage.getItem('carritoBtn');

//Comprar 

document.getElementById('comprarBtn').addEventListener('click', function(){
    alert('¡Gracias por tu compra!');
})
document.getElementById('carritoBtn').addEventListener('click', function(){
    alert('Añadido al carrito');
})