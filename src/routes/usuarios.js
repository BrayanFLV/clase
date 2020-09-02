const express = require('express');
const router=express.Router();


router.get('/adminusu',(req,res)=>{
    res.render('Administrador/usuarios')
});

module.exports=router;