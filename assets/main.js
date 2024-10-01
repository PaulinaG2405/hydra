function cambiarImagen() {
  var imagen = document.getElementById('img');
  if (window.matchMedia('(min-width: 850px)').matches) {
    imagen.src = 'assets/multimedia/destopPrueba.jpeg';
  } else if (window.matchMedia('(max-width: 550px)').matches) {
    imagen.src = 'assets/multimedia/pruebaCelfon.jpeg';
  } else {
    imagen.src = 'assets/multimedia/pruebaTablet.jpeg';
  }
}

// Llama a la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', cambiarImagen);
window.addEventListener('resize', cambiarImagen);
