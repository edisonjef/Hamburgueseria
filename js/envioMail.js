const comentario =document.getElementById('comentarios')
const mail =document.getElementById('email')
function envioMail() {
    let body = "De: " + mail.value + "<br><br>" + "Comentario: " + comentario.value;


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hamburgueseria@visual.com",
        Password: "A3D39F5F769AAE122DD435D8367D63BF9EDB",
        To: 'edisonjef@gmail.com',
        From: "hamburgueseriavisual@gmail.com",
        Subject: "Comentarios Web Hamburguesas",
        Body: body
    }).then(
        message => console.log(message)
    );
}