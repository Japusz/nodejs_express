const express = require('express');
const app = express();
// another way of invoking it:
//const app = require('express')();

const path = require('path');

// setup static and middleware
app.use(express.static('./navbar'));

//app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
//    adding to static asserts
//    SSR
//});

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found.</h1>');
});
app.listen(3000,()=>{
    console.log('Server is listening on port 3000...');
});
// most often used functions:
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

