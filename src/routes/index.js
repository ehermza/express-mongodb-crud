const { Router } = require("express");
const Tarea =require("../models/tarea");

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/add', async (req, res) => {
    // console.log("Adding to database...");
    const title = req.body.title;
    console.log(`Description: ${title}`);

    const tarea = new Tarea();
    await tarea.save();
    
    res.redirect('/');
});
module.exports = router;