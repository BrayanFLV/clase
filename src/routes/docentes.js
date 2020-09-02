const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('soy un docente');
});

router.get('/agregar',(req,res)=>{
    res.render('usuarios/agregarU')
});

router.get('/modificar',(req,res)=>{
    res.render('usuarios/modificarU')
});

router.get('/eliminar',(req,res)=>{
    res.render('usuarios/eliminarU')
});


module.exports=router;