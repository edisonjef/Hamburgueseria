async function clima() {
    // dolarsi.com
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.61315&lon=-58.37723&appid=b332e2ce3742d52670d0cc940170755e&lang=es&units=metric';

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        let ciudad = document.getElementById('ciudad');
        let temperatura = document.getElementById('temperatura');
        let tempMin = document.getElementById('tempMin');
        let temMax = document.getElementById('temMax');
        
        ciudad.textContent = result.name;
        temperatura.textContent = result.main.temp + ' °C';
        temMin.textContent = result.main.temp_min + ' °C';
        temMax.textContent = result.main.temp_max + ' °C';
       

    } catch (error) {
        console.error(error);
    }
}

clima()


