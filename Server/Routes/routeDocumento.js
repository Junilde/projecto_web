const { Router } = require("express")
const router = Router();

const services = require('../Services/servicedocumento');
const ControleDocumento = require('../Controller/ControleDocumento');
/** @description  Home
 * @method GET/
 * */

router.get('/add_documento', services.addDocumento);
/** @description  Home
 * @method GET/
 * */
router.get('/edit_user',services.EditUser);
/** @description  Home
 * @method GET/
 * */
router.get('/listaDocumento', services.listaDocumentos);
/** @description  Home
 * @method GET/
 * */
router.get('/login', services.Login);


//api
router.post('/api/documento',ControleDocumento.create);

router.get('/api/documento',ControleDocumento.find);

router.put('/api/documento/:id',ControleDocumento.update);


 module.exports = router;