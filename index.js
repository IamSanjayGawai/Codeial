const express = require('express');
const port = 8000;
const app = express();

// app.set();
// app.get();
// app.post()





//listen to the server
app.listen(port, function(err)
{
    if(err){
        console.log(`error: ${port}`);
        return;
    }
    console.log(`succesfully running server on: ${port}`);
});
