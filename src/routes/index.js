const { Router } = require("express");
<<<<<<< HEAD
const Carga = require("../models/Carga");

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/add', async (req, res) => {
    // console.log("Adding to database...");
    const title = req.body.title;
    console.log(`Description: ${title}`);

    const carga = new Carga();
    await carga.save();

    res.redirect('/');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const carga = Carga.findOne(id);
    console.log('id: ' + carga);
});

=======
// require("../models/index");

const router = Router();

router.get('/', (req, res) =>{
    res.render('index')
})
>>>>>>> parent of b0e9004... Update form-data to mongo database, ok.
module.exports = router;