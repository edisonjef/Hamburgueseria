let form = document.getElementById('contacto');

function GuardaComentarios() {
  let comentario = document.getElementById('comentarios').value;
  let email = document.getElementById('email').value;


  // Eliminar todas las claves
  localStorage.clear();



  localStorage.setItem('email', email);
  localStorage.setItem('coment', comentario);

}

// form.addEventListener('submit', (event) => {
//   GuardaComentarios();
//   alert('Se envio tu comentario, Gracias por colaborar !!');

// });

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
    var reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    valida = reLargo.test(email)
    if (valida) {
      var clave = document.getElementById('comentarios').value;
      if (clave.length < 6) {
        alert('Tu comentario es muy corto');
        return;
      }
      GuardaComentarios();
      alert('Se envio tu comentario, Gracias por colaborar !!');
      this.submit();
    } else {
      alert('mail no valido');
      return;
    }
  }
}












// Ontener el valor de una clave
// value = localStorage.getItem('coment');

// Eliminar una clave
//localStorage.removeItem('key');












