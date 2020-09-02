const express = require('express');
const router=express.Router();


router.get('/Loguin',(req,res)=>{
    res.render('clientes/loguin')
});

module.exports=router;