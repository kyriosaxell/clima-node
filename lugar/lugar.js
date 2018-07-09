const axios = require('axios');

const getLugar = async (direccion) => {
    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;
    //console.log( JSON.stringify(result.data, undefined, 1) );

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        long: coors.lng
    }
}

module.exports = {
    getLugar
}