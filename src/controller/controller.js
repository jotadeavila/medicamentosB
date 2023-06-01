const  obtenerConexion = require('../database/database.js')

module.exports.agregarProducto = async (req, res) => {
    try {
        
        const datos = JSON.parse(JSON.stringify(req.body));
        const {nombre, descripcion, estado, laboratorio} = datos;
        const conexion = await obtenerConexion();
        const resultado = await conexion.query("INSERT INTO productos (codigo, nombre, descripcion, estado, nombreLab) VALUES ('','"+nombre+"', '"+descripcion+"', '"+estado+"', '"+laboratorio+"') ")
        res.json({message : "Producto agregado"})

    } catch (error) {
        console.log(error.message)
    }
}

module.exports.consultarProductos = async (req, res) => {
    const conexion = await obtenerConexion();
    const resultado = await conexion.query('SELECT * FROM productos');
    console.log(resultado)
    res.json(resultado)
}

module.exports.actualizarProductos = async (req, res) => {
    try {
        
        const datos = JSON.parse(JSON.stringify(req.body));
        const {codigo, nombre, descripcion, estado, laboratorio} = datos;
        const conexion = await obtenerConexion();
        //const resultado = await conexion.query("INSERT INTO productos (codigo, nombre, descripcion, estado, nombreLab) VALUES ('','"+nombre+"', '"+descripcion+"', '"+estado+"', '"+laboratorio+"') ")
        const s = await conexion.query("UPDATE productos SET nombre = '"+nombre+"', descripcion = '"+descripcion+"', estado = '"+estado+"', nombreLab = '"+laboratorio+"' WHERE productos.codigo = '"+codigo+"'")
        res.json({message : "Producto actualizado"})

    } catch (error) {
        console.log(error.message)
    }
}

module.exports.agregarProveedor = async (req, res) => {
    try {
        
        const datos = JSON.parse(JSON.stringify(req.body));
        const {tipoID, numeroID, proveedor, direccion, nombreContacto, numeroContacto} = datos;
        const conexion = await obtenerConexion();
        const resultado = await conexion.query("INSERT INTO proveedores (id, tipoID, numeroID, proveedor, direccion, nombreContacto, numeroContacto) VALUES ('','"+tipoID+"', '"+numeroID+"', '"+proveedor+"', '"+direccion+"', '"+nombreContacto+"', '"+numeroContacto+"')")
        
        res.json({message : "Proveedor agregado"})

    } catch (error) {
        console.log(error.message)
    }
}

module.exports.consultarProveedores = async (req, res) => {
    const conexion = await obtenerConexion();
    const resultado = await conexion.query('SELECT * FROM proveedores');
    console.log(resultado)
    res.json(resultado)
}

module.exports.actualizarProveedores = async (req, res) => {
    try {
        
        const datos = JSON.parse(JSON.stringify(req.body));
        const {id, tipoID, numeroID, proveedor, direccion, nombreContacto, numeroContacto} = datos;
        const conexion = await obtenerConexion();
        const s = await conexion.query("UPDATE proveedores SET tipoID = '"+tipoID+"', numeroID = '"+numeroID+"', proveedor = '"+proveedor+"', direccion = '"+direccion+"', nombreContacto = '"+nombreContacto+"', numeroContacto = '"+numeroContacto+"' WHERE proveedores.id = '"+id+"'")
        res.json({message : "Producto actualizado"})

    } catch (error) {
        console.log(error.message)
    }
}