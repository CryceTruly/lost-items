const express = require('express');

const router = express.Router()

//model
const Item = require('../models/Item');

// @route GET/api/items
// @desc
// 
// @access
router.get('/', (req, res) => {
    Item.find().sort({ date: -1 }).then(items => {
        res.json(items)
    })
})
router.post('/', (req, res) => {
    const item = new Item({
        name: req.body.name
    });
    item.save().then(item => {
        res.json(item)
    }
    )
})

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => {
        
            
        item.remove().then(() => {
            res.json({ deleted: true })
        })
        
        }) .catch (error =>{
            res.status(404).json({ deleted: false })
       
        //.catch(err => )
    })
})

router.get('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => {
       res.json(item)
    }).catch (error =>{
        console.log(error);
        
        res.status(404).json({ message: not-found })

    });
   
})

router.put('/:id/edit', (req, res) => {
    Item.findById(req.params.id).then(item => {
       
     updated={
         id:item._id,
         name:req.body.name,
         date:item.date,
         modified:Date.now()
     }
     Item.updateOne({_id:req.params.id},updated).then(ress=>{
         return res.json({message:'updated',item:updated})
     }).catch(err=>console.log(err)
    )
     


    }).catch (error =>{
        console.log(error);
        
        res.status(404).json({ message: not-found })

    });
   
})
module.exports = router