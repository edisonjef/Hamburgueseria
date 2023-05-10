// captura de los elementos del pedido
var divPedidoActivo = document.getElementById('pedido_activo').getElementsByTagName('div')
sessionStorage.clear()
sessionStorage.setItem('numeroPedido',(Math.floor(Math.random()*302)));
var pedidoAenviar = "Pedido: " + sessionStorage.getItem('numeroPedido') + "<br>";





// Carga de pedido en variable de session

function cargaDePedido() {




    for (var i = 0; i < divPedidoActivo.length; i++) {


        if (divPedidoActivo[i].innerText != "" && divPedidoActivo[i].innerText != "VACIAR CARRITO") {

            pedidoAenviar = pedidoAenviar + "<br>" + divPedidoActivo[i].innerText
        }
        
        sessionStorage.setItem('pedido', pedidoAenviar);
        console.log(sessionStorage.getItem('pedido'))


    }
    
    



}





    
