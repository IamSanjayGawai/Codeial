const express = require('express');
const port = 8000;
const cookieParser = require('cookie-parser')
const app = express();
// express-ejs-layouts

//database conection
const db = require('./config/mongoose')

//middleware for reading throgh the post request
app.use(express.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser());


const expressLayouts = require('express-ejs-layouts')


//accessing static file like css ,images, js 
app.use(express.static('./assets'));

// making common header and footer and only changes body parts
app.use(expressLayouts);


//extraxt  style and scripts from subpages into the layout
app.set('layout extractStyles', true)
app.set('layout extractScripts', true)



// setting ejs files
app.set('view engine', 'ejs');
app.set('views', './views')

// use express router
app.use('/', require('./routes'));




//listen to the server
app.listen(port, function(err)
{
    if(err){
        console.log(`error: ${port}`);
        return;
    }
    console.log(`succesfully running server on: ${port}`);
});
