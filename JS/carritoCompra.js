

function AgregarAlCarrito(plantilla){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(plantilla);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(plantilla + 'se ha añadido al carrito');
}

function CargarCarrito(){
    let carrito = JSON.parse(localStorage.getItem('carritoC')) || [];
    let listaPlantillas = document.getElementById('lista-plantillas');
    listaPlantillas.innerHTML = '';

    carrito.forEach(plantilla => {
        let divPlantilla = document.createElement('div');
        divPlantilla.className = 'plantilla';
        divPlantilla.innerHTML = `<h2>${plantilla}</h2>`;
        listaPlantillas.appendChild(divPlantilla);
    });
}

window.onload = CargarCarrito;