let liMail = document.getElementById('liMail');
liMail.textContent ="Email: " + localStorage.getItem('email').toString();

let licomentario = document.getElementById('liComentario');
licomentario.textContent ="Comentario: "+ localStorage.getItem('coment').toString();