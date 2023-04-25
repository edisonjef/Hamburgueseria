async function clima() {
    const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        let moneda = document.getElementById('moneda');
        let compra = document.getElementById('compra');
        let venta = document.getElementById('venta');
        moneda.textContent = result[0].casa.nombre;
        compra.textContent = result[0].casa.compra;
        venta.textContent = result[0].casa.venta;

        let moneda1 = document.getElementById('moneda1');
        let compra1 = document.getElementById('compra1');
        let venta1 = document.getElementById('venta1');
        moneda1.textContent = result[1].casa.nombre;
        compra1.textContent = result[1].casa.compra;
        venta1.textContent = result[1].casa.venta;

    } catch (error) {
        console.error(error);
    }
}

clima()


