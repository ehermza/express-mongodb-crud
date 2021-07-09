const express =require("express");
const path= require ('path');
const morgan = require('morgan')

const app = express();

// Initialize...
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + "views"));

// middlewares... function those ejects before become the routes 
app.use(morgan('dev'));


// importing routes


// local variables

// Starting...
app.listen(app.get('port'), ()=>{
    console.log(`Server on port: ${app.get('port')}`);
});
