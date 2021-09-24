const express = require('express');
const app = express();
// another way of invoking it:
//const app = require('express')();

//const path = require('path');

// setup static and middleware
//app.use(express.static('./navbar'));

const {products} = require('./data');

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1><a href = "/api/products">products</a>');
});

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((prod)=>{
        const {id,name,image} = prod;
        return{id,name,image};
    });
    res.status(200).json(newProducts);
 });

  app.get('/api/products/:prodID',(req,res)=>{
     const {prodID} = req.params
     
     const singleProduct = products.find((prod)=>
        prod.id === Number(prodID)
    )
    if(!singleProduct){
        return res.status(404).send('Product does not exists.')
    }
    return res.status(200).json(singleProduct);
 });

 app.get('/api/products/:prodID/:revID',(req,res)=>{
    console.log(req.params)
    return res.status(200).send('hi there');
 });
 
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found.</h1>');
})
app.listen(3000,()=>{
    console.log('Server is listening on port 3000...');
});
