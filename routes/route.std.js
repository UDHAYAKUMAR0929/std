const express=require("express");
const router=express.Router()
const {getallstd,createstd,updatestd,delstd}=require('../controller/controller.std.js');

router.get('/',getallstd)
router.post('/',createstd)
router.put('/:id',updatestd)
router.delete('/:id',delstd)

module.exports=router;