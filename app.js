const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


/* const [ , , arg3 = 'numero=5'] = process.argv;
const [ , numero = 5] = arg3.split('='); */


//const numero = 7;

crearArchivo( argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));