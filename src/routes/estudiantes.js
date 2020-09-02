const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('soy un estudiante');
});

router.get('/agregar',(req,res)=>{
    res.render('estudiantes/agregarEs')
});

router.get('/modificar',(req,res)=>{
    res.render('estudiantes/modificarEs')
});

router.get('/eliminar',(req,res)=>{
    res.render('estudiantes/EliminarEs')
});

module.exports=router;