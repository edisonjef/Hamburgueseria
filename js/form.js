let form = document.getElementById('contacto');
let comentarios = [];
let value;

function GuardaComentarios() {
    let text = document.getElementById('comentarios').value;
    let email = document.getElementById('email').value;
    comentarios.push(text)
    comentarios.push(email)

    localStorage.setItem('coment', comentarios);

// Ontener el valor de una clave
value = localStorage.getItem('coment');

// Eliminar una clave
//localStorage.removeItem('key');

// Eliminar todas las claves
// localStorage.clear(); 
  }

 form.addEventListener('submit', (event) => {
    GuardaComentarios();
     alert('Se envio tu comentario, Gracias por colaborar !!');
     
   });
  


 




   
