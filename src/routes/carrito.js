const express = require('express');
const router=express.Router();


router.get('/car',(req,res)=>{
    res.render('clientes/carrito')
});

module.exports=router;