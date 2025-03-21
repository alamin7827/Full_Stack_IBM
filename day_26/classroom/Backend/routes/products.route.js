const express =require ('express');

const {getProducts,createProducts}=require('..controller/products.controller');
const{auth} =require('../middleware/authMiddleware');