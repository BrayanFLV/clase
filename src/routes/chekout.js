const express = require('express');
const router=express.Router();


router.get('/check',(req,res)=>{
    res.render('clientes/check')
});

module.exports=router;