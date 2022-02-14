const { Router } = require("express")
const router = Router();

const services = require('../Services/render');
const ControlerUser = require('../Controller/ControlerUser');
/** @description  Home
 * @method GET/
 * */
router.get('/', services.homeRoutes);

/** @description  Add-user
 * @method GET/
 * */
router.get('/add_user', services.addUser);
/** @description  Home
 * @method GET/
 * */
router.get('/edit_user',services.EditUser);
/** @description  Home
 * @method GET/
 * */
router.get('/user', services.ListaUser);
/** @description  Home
 * @method GET/
 * */
router.get('/admin', services.admin);
router.get('/cadastro', services.Cadastro);

//api
router.post('/api/users',ControlerUser.create);
//cadastro usuarios normais
router.post('/api/usuario',ControlerUser.create);

router.get('/api/users',ControlerUser.find);

router.put('/api/users/:id',ControlerUser.update);


 module.exports = router;