const express = require('express');
const router = express.Router();
const Book = require('../model/book');

// create book
router.post('/createbook',async(req,res)=>{
    const book =new Book(req.body);
    try {
        const insertbook =await book.save();
        return res.status(200).json({message:'Book created',insertbook})
    } catch (error) {
        return res.status(400).json({message:'Book not created'})
    }
});

// get all book
router.get('/getallbooks',async(req,res)=>{
    try {
        const books = await Book.find()
        return res.status(200).json({message:'get all books',books})
    } catch (error) {
        return res.status(400).json({message:'not get all books'})
    }

});

// get book by id
router.get('/getonebook/:id',async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        return res.status(200).json({message:'get one book',book})
    } catch (error) {
        return res.status(400).json({message:'not get one book'})
    }
});

// Update book
router.put('/updatebook/:id',async(req,res)=>{
    try {
        const updatebook= await Book.findByIdAndUpdate({_id:req.params.id},{$set:req.body});
        return res.status(200).json({message:'book updated',updatebook})
    } catch (error) {
        return res.status(400).json({message:'book updated'})
    }
});

// Delete book
router.delete('/deletebook/:id',async(req,res)=>{
    try {
        const deletebook = await Book.findByIdAndDelete({_id:req.params.id});
        return res.status(200).json({message:'book deleted'});
    } catch (error) {
        return res.status(400).json({message:'book not deleted'});
    }
});



module.exports= router;