const router = require('express').Router();
const Tarea_Controlador = require('../controllers/Tarea_Controlador');
const Reclamo_Controlador = require('../controllers/Reclamo_Controlador');
const Comentario_Controlador = require('../controllers/Comentario_Controlador');
const Propuesta_Controlador = require('../controllers/Propuesta_Controlador');

// RUTA BASE DE USUARIO
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// FIN RUTA BASE DE USUSARIO

//
//
//
//TAREA
//
//
//

//Ruta de renderizado de tarea
router.get('/Tarea', Tarea_Controlador.Tarea);

//Ruta de guardado de tarea
router.post('/crear_Tarea', Tarea_Controlador.crear_Tarea);

//Ruta de renderizado de edicion de tarea
router.get('/editar_Tarea', Tarea_Controlador.editar_Tarea);

//Ruta de guardado de tarea editada
router.post('/actualizar_Tarea', Tarea_Controlador.actualizar_Tarea);

//Ruta de renderizado de informacion de tarea
router.get('/informacion_Tarea', Tarea_Controlador.informacion_Tarea);

//Ruta de renderizado de informacion de tarea y las opciones
router.get('/informacionOpciones_Tarea', Tarea_Controlador.informacionOpciones_Tarea);

//Ruta de renderizado de la lista de tarea
router.get('/listado_Tarea', Tarea_Controlador.listado_Tarea);

//Ruta para editar el estado de la tarea
router.get('/estado_Tarea', Tarea_Controlador.estado_Tarea);

router.get('/reclamo_Tarea', Reclamo_Controlador.Generar_Reclamo);
router.get('/denuncia_Tarea', Reclamo_Controlador.Generar_Denuncia);

router.get('/comentario_Tarea', Comentario_Controlador.Generar_Comentario);

router.get('/propuesta_Tarea', Propuesta_Controlador.Visualizar_Propuesta);
router.get('/crear_Propuesta', Propuesta_Controlador.Crear_Propuesta);
router.get('/lista_Propuesta', Propuesta_Controlador.Lista_Propuesta);

//EXPORTADO DE RUTAS
module.exports = router;
