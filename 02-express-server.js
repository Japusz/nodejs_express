const express = require('express');
const app = express();

// another way of invoking it:
//const app = require('express')();
app.get('/',(req,res)=>{
    res.status(200).send('Express home page.')
});
app.get('/about',(req,res)=>{
    res.status(200).send('About  page.')
});

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

