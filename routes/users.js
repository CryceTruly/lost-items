const express=require('express');
const router=express.Router();
const Users=require('../models/User')



router.get('/', (req, res) => {
    Item.find().sort({ joined: -1 }).then(items => {
        res.json(items)
    })
})




module.exports=router;
