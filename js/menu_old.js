

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
var pedir = document.getElementById('pedir');
var totales = 0;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;
var total5 = 0;
var total6 = 0;
var total7 = 0;
var total8 = 0;
var total9 = 0;
var total10 = 0;
var total11 = 0;
var total12 = 0;


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
  console.log('boton vaciar carrito')});

  pedir.addEventListener('click', function () {

  console.log('boton pedir');
  cargaDePedido();
  window.location.href = "/formEnvioPedido.html";
  });


function muestraMenu() {
  // Muestra la ventana de pedido_activo
  var div = document.getElementById('pedido_activo');
  // Al activarse el evento muestra el div
  div.style.display = "grid";

  if (pedido[0] != 0) {
    var mensaje = "Hamburguesa con queso";
    var cantidad = pedido[0];
    var div = document.getElementById('pedido1');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant1');
    div.innerHTML = cantidad;
    total1 = (cantidad * 800);
    var div = document.getElementById('precio1');
    div.innerHTML = "$ " + 800;

  } else {
    // Borra contenido de los divs producto y cantidad
    var div = document.getElementById('pedido1');
    div.innerHTML = "";
    var div = document.getElementById('cant1');
    div.innerHTML = "";
    var div = document.getElementById('precio1');
    div.innerHTML = "";
    total1 = 0;
  }


  if (pedido[1] != 0) {
    var mensaje = "Hamburguesa doble con queso";
    var cantidad = pedido[1];
    var div = document.getElementById('pedido2');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant2');
    div.innerHTML = cantidad;
    total2 = (cantidad * 1000);
    var div = document.getElementById('precio2');
    div.innerHTML = "$ " + 1000;

  }else {
      var div = document.getElementById('pedido2');
      div.innerHTML = "";
      var div = document.getElementById('cant2');
      div.innerHTML = "";
      var div = document.getElementById('precio2');
      div.innerHTML = "";
      total2 = 0;
    }

  if (pedido[2] != 0) {
    var mensaje = "Hamburguesa triple con queso";
    var cantidad = pedido[2];
    var div = document.getElementById('pedido3');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant3');
    div.innerHTML = cantidad;
    total3 = (cantidad * 1200);
    var div = document.getElementById('precio3');
    div.innerHTML = "$ " + 1200;
  }else {
      var div = document.getElementById('pedido3');
      div.innerHTML = "";
      var div = document.getElementById('cant3');
      div.innerHTML = "";
      var div = document.getElementById('precio3');
      div.innerHTML = "";
      total3 = 0;
    }

  if (pedido[3] != 0) {
    var mensaje = "Hamburguesa con queso y bacon";
    var cantidad = pedido[3];
    var div = document.getElementById('pedido4');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant4');
    div.innerHTML = cantidad;
    total4 = (cantidad * 1100);
    var div = document.getElementById('precio4');
    div.innerHTML = "$ " + 1100;
  }else {
      var div = document.getElementById('pedido4');
      div.innerHTML = "";
      var div = document.getElementById('cant4');
      div.innerHTML = "";
      var div = document.getElementById('precio4');
      div.innerHTML = "";
      total4 = 0;
    }

  if (pedido[4] != 0) {
    var mensaje = "Hamburguesa doble con queso y bacon";
    var cantidad = pedido[4];
    var div = document.getElementById('pedido5');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant5');
    div.innerHTML = cantidad;
    total5 = (cantidad * 1300);
    var div = document.getElementById('precio5');
    div.innerHTML = "$ " + 1300;
  }else {
    var div = document.getElementById('pedido5');
    div.innerHTML = "";
    var div = document.getElementById('cant5');
    div.innerHTML = "";
    var div = document.getElementById('precio5');
    div.innerHTML = "";
    total5 = 0;
  }
  if (pedido[5] != 0) {
    var mensaje = "Hamburguesa triple con queso y bacon";
    var cantidad = pedido[5];
    var div = document.getElementById('pedido6');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant6');
    div.innerHTML = cantidad;
    total6 = (cantidad * 1500);
    var div = document.getElementById('precio6');
    div.innerHTML = "$ " + 1500;
  }else {
    var div = document.getElementById('pedido6');
    div.innerHTML = "";
    var div = document.getElementById('cant6');
    div.innerHTML = "";
    var div = document.getElementById('precio6');
    div.innerHTML = "";
    total6 = 0;
  }
  if (pedido[6] != 0) {
    var mensaje = "Hamburguesa cuadruple con queso";
    var cantidad = pedido[6];
    var div = document.getElementById('pedido7');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant7');
    div.innerHTML = cantidad;
    total7 = (cantidad * 1600);
    var div = document.getElementById('precio7');
    div.innerHTML = "$ " + 1600;
  }else {
    var div = document.getElementById('pedido7');
    div.innerHTML = "";
    var div = document.getElementById('cant7');
    div.innerHTML = "";
    var div = document.getElementById('precio7');
    div.innerHTML = "";
    total7 = 0;
  }
  if (pedido[7] != 0) {
    var mensaje = "Hamburguesa cuadruple con queso, bacon y salsa script";
    var cantidad = pedido[7];
    var div = document.getElementById('pedido8');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant8');
    div.innerHTML = cantidad;
    total8 = (cantidad * 1800);
    var div = document.getElementById('precio8');
    div.innerHTML = "$ " + 1800 ;
  }else {
    var div = document.getElementById('pedido8');
    div.innerHTML = "";
    var div = document.getElementById('cant8');
    div.innerHTML = "";
    var div = document.getElementById('precio8');
    div.innerHTML = "";
    total8 = 0;
  }
  if (pedido[8] != 0) {
    var mensaje = "Hamburguesa doble con queso y cebolla caramelizada";
    var cantidad = pedido[8];
    var div = document.getElementById('pedido9');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant9');
    div.innerHTML = cantidad;
    total9 = (cantidad * 1600);
    var div = document.getElementById('precio9');
    div.innerHTML = "$ " + 1600 ;
  }else {
    var div = document.getElementById('pedido9');
    div.innerHTML = "";
    var div = document.getElementById('cant9');
    div.innerHTML = "";
    var div = document.getElementById('precio9');
    div.innerHTML = "";
    total9 = 0;
  }
  if (pedido[9] != 0) {
    var mensaje = "Hamburguesa con queso, bacon y huevo frito";
    var cantidad = pedido[9];
    var div = document.getElementById('pedido10');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant10');
    div.innerHTML = cantidad;
    total10 = (cantidad * 1650);
    var div = document.getElementById('precio10');
    div.innerHTML = "$ " + 1650;
  }else {
    var div = document.getElementById('pedido10');
    div.innerHTML = "";
    var div = document.getElementById('cant10');
    div.innerHTML = "";
    var div = document.getElementById('precio10');
    div.innerHTML = "";
    total10 = 0;
  }
  if (pedido[10] != 0) {
    var mensaje = "Hamburguesa doble con queso, bacon, huevo, lechuga y tomate";
    var cantidad = pedido[10];
    var div = document.getElementById('pedido11');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant11');
    div.innerHTML = cantidad;
    total11 = (cantidad * 1800);
    var div = document.getElementById('precio11');
    div.innerHTML = "$ " + 1800 ;
  }else {
    var div = document.getElementById('pedido11');
    div.innerHTML = "";
    var div = document.getElementById('cant11');
    div.innerHTML = "";
    var div = document.getElementById('precio11');
    div.innerHTML = "";
    total11 = 0;
  }
  if (pedido[11] != 0) {
    var mensaje = "Hamburguesa triple HTML: Huevo, Tomate, Mayonesa, Lechuga";
    var cantidad = pedido[11];
    var div = document.getElementById('pedido12');
    div.innerHTML = mensaje;
    var div = document.getElementById('cant12');
    div.innerHTML = cantidad;
    total12 = (cantidad * 2000);
    var div = document.getElementById('precio12');
    div.innerHTML = "$ " + 2000;
  }else {
    var div = document.getElementById('pedido12');
    div.innerHTML = "";
    var div = document.getElementById('cant12');
    div.innerHTML = "";
    var div = document.getElementById('precio12');
    div.innerHTML = "";
    total12 = 0;
  }


  totales = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12;

  if (totales==0) {
    var div = document.getElementById('total');
    div.innerHTML = "";

  } else {

    var div = document.getElementById('total');
    div.innerHTML = "$ " + totales;
  }

}







// parte de Edison

// captura de los elementos del pedido

var divPedidoActivo = document.getElementById('pedido_activo').getElementsByTagName('div')
sessionStorage.clear()
sessionStorage.setItem('numeroPedido',(Math.floor(Math.random()*302)));
var pedidoAenviar = "Orden N°: " + sessionStorage.getItem('numeroPedido') + "<br>";





// Carga de pedido en variable de session

function cargaDePedido() {




    for (var i = 0; i < divPedidoActivo.length; i++) {


        if (divPedidoActivo[i].innerText != "" && divPedidoActivo[i].innerText != "VACIAR CARRITO") {

            pedidoAenviar = pedidoAenviar + "<br>" + divPedidoActivo[i].innerText
        }

        sessionStorage.setItem('pedido', pedidoAenviar);
        console.log(sessionStorage.getItem('pedido'))


    }





}


