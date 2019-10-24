const crear_opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer. test'
    }
}

const act_opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const del_opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea para eliminar'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', crear_opt)
    .command('actualizar', 'Actualiza el estado completado de una tarea', act_opt)
    .command('borrar', 'Elimina un elemento por hacer', del_opt)
    .help()
    .argv;


module.exports = {
    argv
}