const URL = "https://apiedison.pythonanywhere.com/";


fetch(URL + 'productos')
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al obtener los productos.');
    }
  })
  .then(function (data) {
    // Aca trabajamos con los datos obtenidos.
    console.log("Datos obtenidos:")
    console.log(data); // Mostramos por consola todos los datos recibidos.

    // De cada producto, obtengo el nombre y el precio y los inserto en el HTML

    const resultado_1 = document.getElementById('producto_1');
    const resultadoP_1 = document.getElementById('precio_1');
    resultado_1.textContent = data[0].nombre;
    resultadoP_1.textContent = "$ " + data[0].precio;

    const resultado_2 = document.getElementById('producto_2');
    const resultadoP_2 = document.getElementById('precio_2');
    resultado_2.textContent = data[1].nombre;
    resultadoP_2.textContent = "$ " + data[1].precio;

    const resultado_3 = document.getElementById('producto_3');
    const resultadoP_3 = document.getElementById('precio_3');
    resultado_3.textContent = data[2].nombre;
    resultadoP_3.textContent = "$ " + data[2].precio;

    const resultado_4 = document.getElementById('producto_4');
    const resultadoP_4 = document.getElementById('precio_4');
    resultado_4.textContent = data[3].nombre;
    resultadoP_4.textContent = "$ " + data[3].precio;

    const resultado_5 = document.getElementById('producto_5');
    const resultadoP_5 = document.getElementById('precio_5');
    resultado_5.textContent = data[4].nombre;
    resultadoP_5.textContent = "$ " + data[4].precio;

    const resultado_6 = document.getElementById('producto_6');
    const resultadoP_6 = document.getElementById('precio_6');
    resultado_6.textContent = data[5].nombre;
    resultadoP_6.textContent = "$ " + data[5].precio;

    const resultado_7 = document.getElementById('producto_7');
    const resultadoP_7 = document.getElementById('precio_7');
    resultado_7.textContent = data[6].nombre;
    resultadoP_7.textContent = "$ " + data[6].precio;

    const resultado_8 = document.getElementById('producto_8');
    const resultadoP_8 = document.getElementById('precio_8');
    resultado_8.textContent = data[7].nombre;
    resultadoP_8.textContent = "$ " + data[7].precio;

    const resultado_9 = document.getElementById('producto_9');
    const resultadoP_9 = document.getElementById('precio_9');
    resultado_9.textContent = data[8].nombre;
    resultadoP_9.textContent = "$ " + data[8].precio;

    const resultado_10 = document.getElementById('producto_10');
    const resultadoP_10 = document.getElementById('precio_10');
    resultado_10.textContent = data[9].nombre;
    resultadoP_10.textContent = "$ " + data[9].precio;


    const resultado_11 = document.getElementById('producto_11');
    const resultadoP_11 = document.getElementById('precio_11');
    resultado_11.textContent = data[10].nombre;
    resultadoP_11.textContent = "$ " + data[10].precio;

    const resultado_12 = document.getElementById('producto_12');
    const resultadoP_12 = document.getElementById('precio_12');
    resultado_12.textContent = data[11].nombre;
    resultadoP_12.textContent = "$ " + data[11].precio;

    if (data[12] !== undefined) {
      const resultado_13 = document.getElementById('producto_13');
      const resultadoP_13 = document.getElementById('precio_13');
      resultado_13.textContent = data[12].nombre;
      resultadoP_13.textContent = "$ " + data[12].precio;
    }

    if (data[13] !== undefined) {
      const resultado_14 = document.getElementById('producto_14');
      const resultadoP_14 = document.getElementById('precio_14');
      resultado_14.textContent = data[13].nombre;
      resultadoP_14.textContent = "$ " + data[13].precio;
    }

    if (data[14] !== undefined) {
      const resultado_15 = document.getElementById('producto_15');
      const resultadoP_15 = document.getElementById('precio_15');
      resultado_15.textContent = data[14].nombre;
      resultadoP_15.textContent = "$ " + data[14].precio;
    }

    if (data[15] !== undefined) {
      const resultado_16 = document.getElementById('producto_16');
      const resultadoP_16 = document.getElementById('precio_16');
      resultado_16.textContent = data[15].nombre;
      resultadoP_16.textContent = "$ " + data[15].precio;
    }

    // Aca ocultamos el grid del producto que no existe


    for (let index = 0; index < 16; index++) {
      // Verifica si el elemento está vacío
      if (data[index] === undefined) {
        console.log("El producto ", index + 1, " no existe");
        // oculta el grid perteneciente al producto que no existe.
        var elementoOcultar = document.querySelectorAll('.grid-item')[index];
        elementoOcultar.style.display = 'none';

      } else {
        console.log("El producto ", index + 1, " existe");
      }

    }

    // Obtenemos la referencia del botón
    var boton1 = document.getElementById('1');
    var mensajeSinStock_1 = document.getElementById('sin-stock-1');

    if (data[0].stock == 0) {
      // Oculta el botón
      boton1.style.display = 'none';
      mensajeSinStock_1.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton2 = document.getElementById('2');
    var mensajeSinStock_2 = document.getElementById('sin-stock-2');

    if (data[1].stock == 0) {
      // Oculta el botón
      boton2.style.display = 'none';
      mensajeSinStock_2.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton3 = document.getElementById('3');
    var mensajeSinStock_3 = document.getElementById('sin-stock-3');

    if (data[2].stock == 0) {
      // Oculta el botón
      boton3.style.display = 'none';
      mensajeSinStock_3.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton4 = document.getElementById('4');
    var mensajeSinStock_4 = document.getElementById('sin-stock-4');

    if (data[3].stock == 0) {
      // Oculta el botón
      boton4.style.display = 'none';
      mensajeSinStock_4.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton5 = document.getElementById('5');
    var mensajeSinStock_5 = document.getElementById('sin-stock-5');

    if (data[4].stock == 0) {
      // Oculta el botón
      boton5.style.display = 'none';
      mensajeSinStock_5.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton6 = document.getElementById('6');
    var mensajeSinStock_6 = document.getElementById('sin-stock-6');

    if (data[5].stock == 0) {
      // Oculta el botón
      boton6.style.display = 'none';
      mensajeSinStock_6.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton7 = document.getElementById('7');
    var mensajeSinStock_7 = document.getElementById('sin-stock-7');

    if (data[6].stock == 0) {
      // Oculta el botón
      boton7.style.display = 'none';
      mensajeSinStock_7.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton8 = document.getElementById('8');
    var mensajeSinStock_8 = document.getElementById('sin-stock-8');

    if (data[7].stock == 0) {
      // Oculta el botón
      boton8.style.display = 'none';
      mensajeSinStock_8.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton9 = document.getElementById('9');
    var mensajeSinStock_9 = document.getElementById('sin-stock-9');

    if (data[8].stock == 0) {
      // Oculta el botón
      boton9.style.display = 'none';
      mensajeSinStock_9.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton10 = document.getElementById('10');
    var mensajeSinStock_10 = document.getElementById('sin-stock-10');

    if (data[9].stock == 0) {
      // Oculta el botón
      boton10.style.display = 'none';
      mensajeSinStock_10.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton11 = document.getElementById('11');
    var mensajeSinStock_11 = document.getElementById('sin-stock-11');

    if (data[10].stock == 0) {
      // Oculta el botón
      boton11.style.display = 'none';
      mensajeSinStock_11.style.display = 'block';
    }

    // Obtenemos la referencia del botón
    var boton12 = document.getElementById('12');
    var mensajeSinStock_12 = document.getElementById('sin-stock-12');

    if (data[11].stock == 0) {
      // Oculta el botón
      boton12.style.display = 'none';
      mensajeSinStock_12.style.display = 'block';
    }
    if (data[12] !== undefined) {
      // Obtenemos la referencia del botón
      var boton13 = document.getElementById('13');
      var mensajeSinStock_13 = document.getElementById('sin-stock-13');

      if (data[12].stock == 0) {
        // Oculta el botón
        boton13.style.display = 'none';
        mensajeSinStock_13.style.display = 'block';
      }
    }
    if (data[13] !== undefined) {
      // Obtenemos la referencia del botón
      var boton14 = document.getElementById('14');
      var mensajeSinStock_14 = document.getElementById('sin-stock-14');

      if (data[13].stock == 0) {
        // Oculta el botón
        boton14.style.display = 'none';
        mensajeSinStock_14.style.display = 'block';
      }
    }
    if (data[14] !== undefined) {
      // Obtenemos la referencia del botón
      var boton15 = document.getElementById('15');
      var mensajeSinStock_15 = document.getElementById('sin-stock-15');

      if (data[14].stock == 0) {
        // Oculta el botón
        boton15.style.display = 'none';
        mensajeSinStock_15.style.display = 'block';
      }
    }

    if (data[15] !== undefined) {
      // Obtenemos la referencia del botón
      var boton16 = document.getElementById('16');
      var mensajeSinStock_16 = document.getElementById('sin-stock-16');

      if (data[15].stock == 0) {
        // Oculta el botón
        boton16.style.display = 'none';
        mensajeSinStock_16.style.display = 'block';
      }
    }







    /*
      })

      .catch(function (error) {
        // Aquí puedes manejar el error en caso de que ocurra
        console.log(error); // Mostrar el mensaje de error en la consola
      });
    */

    console.log(data[0].nombre)


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
    var button13 = document.getElementById('13');
    var button14 = document.getElementById('14');
    var button15 = document.getElementById('15');
    var button16 = document.getElementById('16');
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
    var total13 = 0;
    var total14 = 0;
    var total15 = 0;
    var total16 = 0;

    // Creo un array vacio de 16 elementos
    var pedido = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    button13.addEventListener('click', function () {
      // Aquí puedes ejecutar el código que deseas cuando se presione el botón
      pedido[12] = pedido[12] + 1;
      console.log(pedido);
      console.log('boton pedido 13');
      muestraMenu();
    });
    // Agregar un evento de escucha al botón
    button14.addEventListener('click', function () {
      // Aquí puedes ejecutar el código que deseas cuando se presione el botón
      pedido[13] = pedido[13] + 1;
      console.log(pedido);
      console.log('boton pedido 14');
      muestraMenu();
    });
    // Agregar un evento de escucha al botón
    button15.addEventListener('click', function () {
      // Aquí puedes ejecutar el código que deseas cuando se presione el botón
      pedido[14] = pedido[14] + 1;
      console.log(pedido);
      console.log('boton pedido 15');
      muestraMenu();
    });
    // Agregar un evento de escucha al botón
    button16.addEventListener('click', function () {
      // Aquí puedes ejecutar el código que deseas cuando se presione el botón
      pedido[15] = pedido[15] + 1;
      console.log(pedido);
      console.log('boton pedido 16');
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
      console.log('boton vaciar carrito')
    });

    pedir.addEventListener('click', function () {


      modifica_stock(pedido);
      console.log('stock modificado');

      //cargaDePedido();

      //window.location.href = "/formEnvioPedido.html";
    });


    function muestraMenu() {
      // Muestra la ventana de pedido_activo
      var div = document.getElementById('pedido_activo');
      // Al activarse el evento muestra el div
      div.style.display = "grid";

      if (pedido[0] != 0) {
        var mensaje = data[0].nombre
        var cantidad = pedido[0];
        var div = document.getElementById('pedido1');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant1');
        div.innerHTML = cantidad;
        total1 = (cantidad * data[0].precio);
        var div = document.getElementById('precio1');
        div.innerHTML = "$ " + data[0].precio;

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
        var mensaje = data[1].nombre;
        var cantidad = pedido[1];
        var div = document.getElementById('pedido2');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant2');
        div.innerHTML = cantidad;
        total2 = (cantidad * data[1].precio);
        var div = document.getElementById('precio2');
        div.innerHTML = "$ " + data[1].precio;

      } else {
        var div = document.getElementById('pedido2');
        div.innerHTML = "";
        var div = document.getElementById('cant2');
        div.innerHTML = "";
        var div = document.getElementById('precio2');
        div.innerHTML = "";
        total2 = 0;
      }

      if (pedido[2] != 0) {
        var mensaje = data[2].nombre;
        var cantidad = pedido[2];
        var div = document.getElementById('pedido3');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant3');
        div.innerHTML = cantidad;
        total3 = (cantidad * data[2].precio);
        var div = document.getElementById('precio3');
        div.innerHTML = "$ " + data[2].precio;
      } else {
        var div = document.getElementById('pedido3');
        div.innerHTML = "";
        var div = document.getElementById('cant3');
        div.innerHTML = "";
        var div = document.getElementById('precio3');
        div.innerHTML = "";
        total3 = 0;
      }

      if (pedido[3] != 0) {
        var mensaje = data[3].nombre;
        var cantidad = pedido[3];
        var div = document.getElementById('pedido4');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant4');
        div.innerHTML = cantidad;
        total4 = (cantidad * data[3].precio);
        var div = document.getElementById('precio4');
        div.innerHTML = "$ " + data[3].precio;
      } else {
        var div = document.getElementById('pedido4');
        div.innerHTML = "";
        var div = document.getElementById('cant4');
        div.innerHTML = "";
        var div = document.getElementById('precio4');
        div.innerHTML = "";
        total4 = 0;
      }

      if (pedido[4] != 0) {
        var mensaje = data[4].nombre;
        var cantidad = pedido[4];
        var div = document.getElementById('pedido5');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant5');
        div.innerHTML = cantidad;
        total5 = (cantidad * data[4].precio);
        var div = document.getElementById('precio5');
        div.innerHTML = "$ " + data[4].precio;
      } else {
        var div = document.getElementById('pedido5');
        div.innerHTML = "";
        var div = document.getElementById('cant5');
        div.innerHTML = "";
        var div = document.getElementById('precio5');
        div.innerHTML = "";
        total5 = 0;
      }
      if (pedido[5] != 0) {
        var mensaje = data[5].nombre;
        var cantidad = pedido[5];
        var div = document.getElementById('pedido6');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant6');
        div.innerHTML = cantidad;
        total6 = (cantidad * data[5].precio);
        var div = document.getElementById('precio6');
        div.innerHTML = "$ " + data[5].precio;
      } else {
        var div = document.getElementById('pedido6');
        div.innerHTML = "";
        var div = document.getElementById('cant6');
        div.innerHTML = "";
        var div = document.getElementById('precio6');
        div.innerHTML = "";
        total6 = 0;
      }
      if (pedido[6] != 0) {
        var mensaje = data[6].nombre;
        var cantidad = pedido[6];
        var div = document.getElementById('pedido7');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant7');
        div.innerHTML = cantidad;
        total7 = (cantidad * data[6].precio);
        var div = document.getElementById('precio7');
        div.innerHTML = "$ " + data[6].precio;
      } else {
        var div = document.getElementById('pedido7');
        div.innerHTML = "";
        var div = document.getElementById('cant7');
        div.innerHTML = "";
        var div = document.getElementById('precio7');
        div.innerHTML = "";
        total7 = 0;
      }
      if (pedido[7] != 0) {
        var mensaje = data[7].nombre;
        var cantidad = pedido[7];
        var div = document.getElementById('pedido8');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant8');
        div.innerHTML = cantidad;
        total8 = (cantidad * data[7].precio);
        var div = document.getElementById('precio8');
        div.innerHTML = "$ " + data[7].precio;
      } else {
        var div = document.getElementById('pedido8');
        div.innerHTML = "";
        var div = document.getElementById('cant8');
        div.innerHTML = "";
        var div = document.getElementById('precio8');
        div.innerHTML = "";
        total8 = 0;
      }
      if (pedido[8] != 0) {
        var mensaje = data[8].nombre;
        var cantidad = pedido[8];
        var div = document.getElementById('pedido9');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant9');
        div.innerHTML = cantidad;
        total9 = (cantidad * data[8].precio);
        var div = document.getElementById('precio9');
        div.innerHTML = "$ " + data[8].precio;
      } else {
        var div = document.getElementById('pedido9');
        div.innerHTML = "";
        var div = document.getElementById('cant9');
        div.innerHTML = "";
        var div = document.getElementById('precio9');
        div.innerHTML = "";
        total9 = 0;
      }
      if (pedido[9] != 0) {
        var mensaje = data[9].nombre;
        var cantidad = pedido[9];
        var div = document.getElementById('pedido10');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant10');
        div.innerHTML = cantidad;
        total10 = (cantidad * data[9].precio);
        var div = document.getElementById('precio10');
        div.innerHTML = "$ " + data[9].precio;
      } else {
        var div = document.getElementById('pedido10');
        div.innerHTML = "";
        var div = document.getElementById('cant10');
        div.innerHTML = "";
        var div = document.getElementById('precio10');
        div.innerHTML = "";
        total10 = 0;
      }
      if (pedido[10] != 0) {
        var mensaje = data[10].nombre;
        var cantidad = pedido[10];
        var div = document.getElementById('pedido11');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant11');
        div.innerHTML = cantidad;
        total11 = (cantidad * data[10].precio);
        var div = document.getElementById('precio11');
        div.innerHTML = "$ " + data[10].precio;
      } else {
        var div = document.getElementById('pedido11');
        div.innerHTML = "";
        var div = document.getElementById('cant11');
        div.innerHTML = "";
        var div = document.getElementById('precio11');
        div.innerHTML = "";
        total11 = 0;
      }
      if (pedido[11] != 0) {
        var mensaje = data[11].nombre;
        var cantidad = pedido[11];
        var div = document.getElementById('pedido12');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant12');
        div.innerHTML = cantidad;
        total12 = (cantidad * data[11].precio);
        var div = document.getElementById('precio12');
        div.innerHTML = "$ " + data[11].precio;
      } else {
        var div = document.getElementById('pedido12');
        div.innerHTML = "";
        var div = document.getElementById('cant12');
        div.innerHTML = "";
        var div = document.getElementById('precio12');
        div.innerHTML = "";
        total12 = 0;
      }

      if (pedido[12] != 0) {
        var mensaje = data[12].nombre;
        var cantidad = pedido[12];
        var div = document.getElementById('pedido13');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant13');
        div.innerHTML = cantidad;
        total13 = (cantidad * data[12].precio);
        var div = document.getElementById('precio13');
        div.innerHTML = "$ " + data[12].precio;
      } else {
        var div = document.getElementById('pedido13');
        div.innerHTML = "";
        var div = document.getElementById('cant13');
        div.innerHTML = "";
        var div = document.getElementById('precio13');
        div.innerHTML = "";
        total13 = 0;
      }

      if (pedido[13] != 0) {
        var mensaje = data[13].nombre;
        var cantidad = pedido[13];
        var div = document.getElementById('pedido14');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant14');
        div.innerHTML = cantidad;
        total14 = (cantidad * data[13].precio);
        var div = document.getElementById('precio14');
        div.innerHTML = "$ " + data[13].precio;
      } else {
        var div = document.getElementById('pedido14');
        div.innerHTML = "";
        var div = document.getElementById('cant14');
        div.innerHTML = "";
        var div = document.getElementById('precio14');
        div.innerHTML = "";
        total14 = 0;
      }
      if (pedido[14] != 0) {
        var mensaje = data[14].nombre;
        var cantidad = pedido[14];
        var div = document.getElementById('pedido15');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant15');
        div.innerHTML = cantidad;
        total15 = (cantidad * data[14].precio);
        var div = document.getElementById('precio15');
        div.innerHTML = "$ " + data[14].precio;
      } else {
        var div = document.getElementById('pedido15');
        div.innerHTML = "";
        var div = document.getElementById('cant15');
        div.innerHTML = "";
        var div = document.getElementById('precio15');
        div.innerHTML = "";
        total15 = 0;
      }
      if (pedido[15] != 0) {
        var mensaje = data[15].nombre;
        var cantidad = pedido[15];
        var div = document.getElementById('pedido16');
        div.innerHTML = mensaje;
        var div = document.getElementById('cant16');
        div.innerHTML = cantidad;
        total16 = (cantidad * data[15].precio);
        var div = document.getElementById('precio16');
        div.innerHTML = "$ " + data[15].precio;
      } else {
        var div = document.getElementById('pedido16');
        div.innerHTML = "";
        var div = document.getElementById('cant16');
        div.innerHTML = "";
        var div = document.getElementById('precio16');
        div.innerHTML = "";
        total16 = 0;
      }
      totales = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15 + total16;

      if (totales == 0) {
        var div = document.getElementById('total');
        div.innerHTML = "";

      } else {

        var div = document.getElementById('total');
        div.innerHTML = "$ " + totales;
      }

    }

    // Parte para modificar el stock
    // Trae como parametro el array 'pedido'
    function modifica_stock(pedido) {

      for (let i = 0; i < 15; i++) {
        if (pedido[i] !== 0) {
          var cod = i+1;

          // Creamos un objeto con los datos del stock actualizados. mantengo los otros atributos igual.
          var producto = {
            codigo: data[i].codigo,
            descripcion: data[i].descripcion,
            nombre: data[i].nombre,
            precio: data[i].precio,
            stock: (data[i].stock - pedido[i]), // resta al stock la cantidad pedida
          };

          // Realizamos la solicitud PUT al servidor para guardar los cambios
          fetch(URL + 'productos/' + cod, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
          })
            .then(function (response) {
              if (response.ok) {
                return response.json(); // Parseamos la respuesta JSON
              } else {
                // Si hubo un error, lanzar explícitamente una excepción
                // para ser "catcheada" más adelante
                throw new Error('Error al guardar los cambios del producto.');
              }
            })

            .catch(function (error) {
              // Código para manejar errores
              alert('Error al guardar los cambios del producto.');
            })



        }

      }

    }









    // parte de Edison

    // captura de los elementos del pedido

    var divPedidoActivo = document.getElementById('pedido_activo').getElementsByTagName('div')
    sessionStorage.clear()
    sessionStorage.setItem('numeroPedido', (Math.floor(Math.random() * 302)));
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


  })

  .catch(function (error) {
    // Aquí puedes manejar el error en caso de que ocurra
    console.log(error); // Mostrar el mensaje de error en la consola
  });

