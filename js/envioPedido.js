// captura de los elementos del pedido
var divPedidoActivo = document.getElementById('pedido_activo').getElementsByTagName('div')
var pedidoAenviar = "Pedido: <br>";


var mails = ['edisonjef@gmail.com']
function envioPedidoMail() {
    let body = pedidoAenviar



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


// envio de pedido

function envioPedido() {




    for (var i = 0; i < divPedidoActivo.length; i++) {


        if (divPedidoActivo[i].innerText != "" && divPedidoActivo[i].innerText != "VACIAR CARRITO") {

            pedidoAenviar = pedidoAenviar + "<br>" + divPedidoActivo[i].innerText
        }
        console.log(pedidoAenviar)


    }
    
    envioPedidoMail()


}

