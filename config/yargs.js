const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',
            type: 'number'
        },
        'l': {
            alias: 'listar',
            default: false,
            describe: 'Muestra la tabla en consola',
            type: 'boolean'
        },
        'h': {
            alias: 'hasta',
            demandOption: true,
            describe: 'Hasta que número se va a multiplicar',
            type: 'number',
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        } else if ( isNaN(argv.h)) {
            throw 'El límite tiene que ser un número'
        }
        return true
    })
    .argv;

module.exports = argv;