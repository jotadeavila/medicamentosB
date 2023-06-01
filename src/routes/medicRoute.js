const { consultarProductosR, eliminarRecepcion, eliminarProveedor, eliminarProducto, agregarProducto, consultarProductos, actualizarProductos, agregarProveedor, consultarProveedores, actualizarProveedores, agregarRecepcion, consultarRecepciones, actualizarRecepciones } = require('../controller/controller');

const router = require('express').Router()

router.post('/agregarP', agregarProducto);
router.get('/productos', consultarProductos)
router.get('/productosR', consultarProductosR)
router.put('/actualizarP', actualizarProductos)
router.delete('/eliminarP', eliminarProducto)

router.post('/agregarPr', agregarProveedor);
router.get('/proveedores', consultarProveedores)
router.put('/actualizarPr', actualizarProveedores)
router.delete('/eliminarPr', eliminarProveedor)

router.post('/agregarR', agregarRecepcion);
router.get('/recepciones', consultarRecepciones)
router.put('/actualizarR', actualizarRecepciones)
router.delete('/eliminarR', eliminarRecepcion)

module.exports = router;