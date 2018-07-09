const axios = require('axios');

const getClima = async (lat, lng) =>{

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=15765c066c3e40417ac717c38f06ee9b&units=metric`);

    if(resp.cod===400){
        throw new Error ('No hay resultados para esas coordenadas');
    }
    let weather = resp.data.main.temp;
    //let weather = wea.temp;

    return weather;
}

module.exports={
    getClima
}