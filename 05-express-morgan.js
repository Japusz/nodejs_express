const express = require('express');
const app = express();
// another way of invoking it:('
//const app = require('express')();

const morgan = require('morgan')
app.use(morgan('tiny'))
//const logger = require('./logger')
//const authorize = require('./authorize')
//app.use([logger,authorize])
//app.use('/api',logger)

// req => middleware => res

app.get('/',(req,res)=>{;
    res.send('Home page')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/product',(req,res)=>{;
    res.send('Product')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found.</h1>');
});

app.listen(3000,()=>{
    console.log('Server is listening on port 3000...');
});
