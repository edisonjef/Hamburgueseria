
// validacion de los datos del formulario

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("contacto").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
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
      var clave = document.getElementById('comentarios').value;
      if (clave.length < 6) {
        alert('Tu comentario es muy corto');
        return;
      }
      envioMail();
      alert("Gracias por enviar su comentario!!")
      this.submit();
      
      
    } else {
      alert('mail no valido');
      return;

    }
  }
}
























