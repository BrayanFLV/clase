const express = require('express');
const router=express.Router();


router.get('/contactenos',(req,res)=>{
    res.render('clientes/contacto')
});


module.exports=router;