const router = require("express").Router();
const usuarioRoutes = require("./usuario")



router.post("/user", usuarioRoutes)

module.exports = router;

//localhost:3000/user