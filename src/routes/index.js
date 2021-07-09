const { Router } = require("express");
// require("../models/index");

const router = Router();

router.get('/', (req, res) =>{
    res.render('index')
})
module.exports = router;