const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user === 'johny'){
        req.user = {name:'Jan',id:3}
        next()
    }
    else{
        res.status(401).send('You are not authorized to use that resource')
    }
    //console.log('authorize')
    //next()
}
module.exports=authorize