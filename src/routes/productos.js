const express = require('express');
const router=express.Router();


router.get('/productosAccion',(req,res)=>{
    res.render('clientes/productosAcc')
});
router.get('/productosRol',(req,res)=>{
    res.render('clientes/productosrol')
});

router.get('/productosDe',(req,res)=>{
    res.render('clientes/productosDepor')
});

router.get('/productosPla',(req,res)=>{
    res.render('clientes/productosPlataforma')
});

router.get('/productosLucha',(req,res)=>{
    res.render('clientes/productosLuc')
});

module.exports=router;