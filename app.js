const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfor = async (direccion) => {

    try {
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.lat, coors.long);

        return `El clima en ${coors.direccion} es de ${temp}°C`.yellow;

        //return colors.red(`El clima en ${coors.direccion} es de`, temp);
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }
}

getInfor(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });