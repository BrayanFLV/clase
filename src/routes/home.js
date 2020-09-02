const express = require('express');
const router=express.Router();


router.get('/homes',(req,res)=>{
    res.render('clientes/home')
});

module.exports=router;