// Seleccionar los elementos del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexadecimalAleatorio() {
  let digitos = '0123456789ABCDEF';
  let colorHexadecimal = '#';

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHexadecimal += digitos[indiceAleatorio];
  }

  return colorHexadecimal;
}

boton.addEventListener('click', () => {
  let colorAleatorio = generarColorHexadecimalAleatorio();
  // Actualizar el texto.
  color.textContent = colorAleatorio;
  // Actualizar el color de fondo.
  document.body.style.backgroundColor = colorAleatorio;
});