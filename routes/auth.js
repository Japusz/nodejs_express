const express = require('express');
const router = express.Router();

let{people} = require('../data');

 router.post('/',(req,res)=>{
    const {name} = req.body
    if(name){
        const person = people.find((person) =>person.name===name)
        if(person){
            return res.status(200).send(`Welcome ${name}.`)}
        else{
            return res.status(401).send('Sorry, you are not authorised to use thar resource.')   
        }
    }
    return res.status(401).send('Please provide your credentials.')
})
module.exports = router;
