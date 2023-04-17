let form = document.getElementById('contacto');

function GuardaComentarios() {
  let comentario = document.getElementById('comentarios').value;
  let email = document.getElementById('email').value;


  // Eliminar todas las claves
  localStorage.clear();



  localStorage.setItem('email', email);
  localStorage.setItem('coment', comentario);

}

form.addEventListener('submit', (event) => {
  GuardaComentarios();
  alert('Se envio tu comentario, Gracias por colaborar !!');

});




// Ontener el valor de una clave
// value = localStorage.getItem('coment');

// Eliminar una clave
//localStorage.removeItem('key');












