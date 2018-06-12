const express=require('express');
const router=express.Router();

router.get('/',function(req,res){
	console.log("jjjjjjjjjj")
	res.send('api works');
});

module.exports=router;
