const { agregarProducto, consultarProductos, actualizarProductos, agregarProveedor, consultarProveedores, actualizarProveedores } = require('../controller/controller');

const router = require('express').Router()

router.post('/agregarP', agregarProducto);
router.get('/productos', consultarProductos)
router.put('/actualizarP', actualizarProductos)

router.post('/agregarPr', agregarProveedor);
router.get('/proveedores', consultarProveedores)
router.put('/actualizarPr', actualizarProveedores)

module.exports = router;