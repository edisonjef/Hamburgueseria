// define una variable para cada botón

var button1 = document.getElementById('1');
var button2 = document.getElementById('2');
var button3 = document.getElementById('3');
var button4 = document.getElementById('4');
var button5 = document.getElementById('5');
var button6 = document.getElementById('6');
var button7 = document.getElementById('7');
var button8 = document.getElementById('8');
var button9 = document.getElementById('9');
var button10 = document.getElementById('10');
var button11 = document.getElementById('11');
var button12 = document.getElementById('12');
var vaciar = document.getElementById('vaciar');

// Creo un array vacio de 12 elementos
var pedido = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Agregar un evento de escucha al botón
button1.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[0] = pedido[0] + 1;
  console.log(pedido);
  console.log('boton pedido 1');
  muestraMenu();

});
// Agregar un evento de escucha al botón
button2.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[1] = pedido[1] + 1;
  console.log(pedido);
  console.log('boton pedido 2');
  muestraMenu();
});
// Agregar un evento de escucha al botón
button3.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[2] = pedido[2] + 1;
  console.log(pedido);
  console.log('boton pedido 3');
  muestraMenu();
});
// Agregar un evento de escucha al botón
button4.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[3] = pedido[3] + 1;
  console.log(pedido);
  console.log('boton pedido 4');
  muestraMenu();
});
// Agregar un evento de escucha al botón
button5.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[4] = pedido[4] + 1;
  console.log(pedido);
  console.log('boton pedido 5');
  muestraMenu();

});
// Agregar un evento de escucha al botón
button6.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[5] = pedido[5] + 1;
  console.log(pedido);
  console.log('boton pedido 6');
  muestraMenu();
});
// Agregar un evento de escucha al botón
button7.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[6] = pedido[6] + 1;
  console.log(pedido);
  console.log('boton pedido 7');
  muestraMenu();
});
// Agregar un evento de escucha al botón
button8.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[7] = pedido[7] + 1;
  console.log(pedido);
  console.log('boton pedido 8');
  muestraMenu();
});
// Agregar un evento de escucha al botón
button9.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[8] = pedido[8] + 1;
  console.log(pedido);
  console.log('boton pedido 9');
  muestraMenu();

});
// Agregar un evento de escucha al botón
button10.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[9] = pedido[9] + 1;
  console.log(pedido);
  console.log('boton pedido 10');
  muestraMenu();
});
// Agregar un evento de escucha al botón
button11.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[10] = pedido[10] + 1;
  console.log(pedido);
  console.log('¡boton pedido 11');
  muestraMenu();
});
// Agregar un evento de escucha al botón
button12.addEventListener('click', function () {
  // Aquí puedes ejecutar el código que deseas cuando se presione el botón
  pedido[11] = pedido[11] + 1;
  console.log(pedido);
  console.log('boton pedido 12');
  muestraMenu();
});
// Agregar un evento de escucha al botón
vaciar.addEventListener('click', function () {
  // Vaciar array pedido
  for (let i = 0; i < pedido.length; i++) {
    pedido[i] = 0;
  }
  //oculta el div de pedido
  var div = document.getElementById('pedido_activo');
  div.style.display = "none";

  console.log(pedido);
  console.log('boton vaciar carrito');

});




console.log(pedido);

function muestraMenu() {
  // Muestra la ventana de pedido_activo
  var div = document.getElementById('pedido_activo');
  div.style.display = 'block'; // Al activarse el evento muestra el div

  if (pedido[0] != 0) {
    var mensaje = "Hamburguesa con queso X ";
    var cantidad = pedido[0];
    var div = document.getElementById('pedido1');
    div.innerHTML = mensaje + cantidad;
  } else {
    var div = document.getElementById('pedido1');
    div.innerHTML = "";
  }


  if (pedido[1] != 0) {
    var mensaje = "Hamburguesa doble con queso X ";
    var cantidad = pedido[1];
    var div = document.getElementById('pedido2');
    div.innerHTML = mensaje + cantidad;
  }else {
      var div = document.getElementById('pedido2');
      div.innerHTML = "";
    }

  if (pedido[2] != 0) {
    var mensaje = "Hamburguesa triple con queso X ";
    var cantidad = pedido[2];
    var div = document.getElementById('pedido3');
    div.innerHTML = mensaje + cantidad;
  }else {
      var div = document.getElementById('pedido3');
      div.innerHTML = "";
    }

  if (pedido[3] != 0) {
    var mensaje = "Hamburguesa con queso y bacon X ";
    var cantidad = pedido[3];
    var div = document.getElementById('pedido4');
    div.innerHTML = mensaje + cantidad;
  }else {
      var div = document.getElementById('pedido4');
      div.innerHTML = "";
    }

  if (pedido[4] != 0) {
    var mensaje = "Hamburguesa doble con queso y bacon X ";
    var cantidad = pedido[4];
    var div = document.getElementById('pedido5');
    div.innerHTML = mensaje + cantidad;
  }else {
    var div = document.getElementById('pedido5');
    div.innerHTML = "";
  }
  if (pedido[5] != 0) {
    var mensaje = "Hamburguesa triple con queso y bacon X ";
    var cantidad = pedido[5];
    var div = document.getElementById('pedido6');
    div.innerHTML = mensaje + cantidad;
  }else {
    var div = document.getElementById('pedido6');
    div.innerHTML = "";
  }
  if (pedido[6] != 0) {
    var mensaje = "Hamburguesa cuadruple con queso X ";
    var cantidad = pedido[6];
    var div = document.getElementById('pedido7');
    div.innerHTML = mensaje + cantidad;
  }else {
    var div = document.getElementById('pedido7');
    div.innerHTML = "";
  }
  if (pedido[7] != 0) {
    var mensaje = "Hamburguesa cuadruple con queso, bacon y salsa script X ";
    var cantidad = pedido[7];
    var div = document.getElementById('pedido8');
    div.innerHTML = mensaje + cantidad;
  }else {
    var div = document.getElementById('pedido8');
    div.innerHTML = "";
  }
  if (pedido[8] != 0) {
    var mensaje = "Hamburguesa doble con queso y cebolla caramelizada X ";
    var cantidad = pedido[8];
    var div = document.getElementById('pedido9');
    div.innerHTML = mensaje + cantidad;
  }else {
    var div = document.getElementById('pedido9');
    div.innerHTML = "";
  }
  if (pedido[9] != 0) {
    var mensaje = "Hamburguesa con , bacon y huevo frito X ";
    var cantidad = pedido[9];
    var div = document.getElementById('pedido10');
    div.innerHTML = mensaje + cantidad;
  }else {
    var div = document.getElementById('pedido10');
    div.innerHTML = "";
  }
  if (pedido[10] != 0) {
    var mensaje = "Hamburguesa doble con queso, bacon, huevo, lechuga y tomate X ";
    var cantidad = pedido[10];
    var div = document.getElementById('pedido11');
    div.innerHTML = mensaje + cantidad;
  }else {
    var div = document.getElementById('pedido11');
    div.innerHTML = "";
  }
  if (pedido[11] != 0) {
    var mensaje = "Hamburguesa triple HTML: Huevo, Tomate, Mayonesa, Lechuga X ";
    var cantidad = pedido[11];
    var div = document.getElementById('pedido12');
    div.innerHTML = mensaje + cantidad;
  }else {
    var div = document.getElementById('pedido12');
    div.innerHTML = "";
  }

}
