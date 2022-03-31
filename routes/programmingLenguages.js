const express=require('express');
const router= express.Router();
const programmingLenguages=require('../service/programmingLenguages');

router.get('/',async function(req,res,next){

    try{
        res.json(await programmingLenguages.getMultiple(req.query.page));
    }catch(err){
        console.error(`Error al obtener los lenguajes`,err.message);
        next(err);
    }
});

router.post('/',async function(req,res,next){
    try{
        res.json(await programmingLenguages.create(req.body));
    }catch(err){
        console.error(`Error mientras se creaba el registro`,
        err.message);
        next(err);
    }
});
router.put('/:id',async function(req,res,next){
    try {
        res.json(await programmingLenguages.update(
            req.params.id,req.body))
    } catch (error) {
        console.error(`Error mientras se creaba el registro`,
        err.message);
        next(err);
    }
});
router.delete('/:id',async function(req,res,next){
    try {
        res.json(await programmingLenguages.remove(
            req.params.id));
    } catch (error) {
        console.error(`Error while deleting programming language`, err.message);
        next(err);    
    }
})
module.exports=router;