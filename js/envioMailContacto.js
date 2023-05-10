const comentario = document.getElementById('comentarios')
const mail = document.getElementById('email')
var mails =['edisonjef@gmail.com','Agustin.getcheto@gmail.com']
function envioMail() {
    let body = "De: " + mail.value + "<br><br>" + "Comentario: " + comentario.value;



    Email.send({
        SecureToken: "5b823ad5-cf10-4194-8633-1994534abf23",
        To: mails,
        From: 'hamburgueseriavisual@gmail.com',
        Subject: "Comentarios Web Hamburguesas",
        Body: body
    }).then(
        message => console.log(message)
    );
}