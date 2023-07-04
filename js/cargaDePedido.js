

// captura de los elementos del pedido
var divPedidoActivo = document.getElementById('pedido_activo').getElementsByTagName('div')
sessionStorage.clear()
sessionStorage.setItem('numeroPedido',(Math.floor(Math.random()*302)));
var pedidoAenviar = "Pedido: " + sessionStorage.getItem('numeroPedido') + "<br>";





// Carga de pedido en variable de session

function cargaDePedido() {




    for (var i = 4; i < 41;) {


        if (divPedidoActivo[i].innerText != "" && divPedidoActivo[i].innerText != "VACIAR CARRITO") {

            pedidoAenviar = pedidoAenviar + "<br>" + divPedidoActivo[i].innerText + " " + divPedidoActivo[i+1].innerText + "   " + divPedidoActivo[i+2].innerText
        }
        
        
        console.log(sessionStorage.getItem('pedido'))
        i = i+3;


    }
    pedidoAenviar = pedidoAenviar + "<br>" + divPedidoActivo[41].innerText + " " + divPedidoActivo[42].innerText
    sessionStorage.setItem('pedido', pedidoAenviar);

    
    



}





    
