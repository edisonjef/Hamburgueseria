
//agregar el evento submit al formulario con la ejecucion de una funcion

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formPedido").addEventListener('submit', validarFormPedido);
});

// Validacion del formulario en el mail y Nombre y apellido

function validarFormPedido(evento) {
  evento.preventDefault();
  var email = document.getElementById('email').value;
  var valida = false;
  if (email.length == 0) {
    alert('mail vacio');
    return;

  } else {
    var comprobarMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    valida = comprobarMail.test(email)
    if (valida) {
      var clave = document.getElementById('nombreApellido').value;
      if (clave.length < 3) {
        alert('Nombre y apellido vacio o demasiado corto');
        return;
      }
      envioPedidoMail();
      alert("Pedido enviado, numero de orden: " + sessionStorage.getItem('numeroPedido'));
      window.location.href = "/menu.html";
      //this.submit();


    } else {
      alert('mail no valido');
      return;

    }
  }
}


// envio del pedido

const nombre = document.getElementById('nombreApellido')
const mail = document.getElementById('email')
const direccion = document.getElementById('direccion')
const telefono = document.getElementById('telefono')
const fecha = new Date();
var mailCliente = mail.value
var mails = ['edisonjef@gmail.com', ' jorware@hotmail.com']



// funcion de envio de pedido

function envioPedidoMail() {
    let body = "De: " + nombre.value + "<br><br>" + fecha +  "<br><br>"  + "Direccion: " +  direccion.value + "<br><br>" + "Telefono: " + telefono.value + "<br><br>" + "Email: " + mail.value + "<br><br>" + sessionStorage.getItem('pedido')




    Email.send({
        SecureToken: "5b823ad5-cf10-4194-8633-1994534abf23",
        To: mails,
        From: 'hamburgueseriavisual@gmail.com',
        Subject: "Pedido Web Hamburguesas",
        Body: body
    }).then(
        message => console.log(message)
    );

}
