const mysql = require('promise-mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'medicamentos',
    user: 'root',
    password: ''
})

const obtenerConexion = () =>{
    return conexion
}

module.exports = obtenerConexion;