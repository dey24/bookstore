import express from "express";
import { Book } from "../model/bookModel.js";

const router = express.Router();

//Route to save a book

router.post('/saveBooks', async(req, res) => {
    try {
        if(!req.body.title || 
            !req.body.author || 
            !req.body.price || 
            !req.body.availability || 
            !req.body.publishYear)
            {
            return res.status(400).send({
                message: 'Send all required values: title, author, price, availability, publish Year',
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            availability: req.body.availability,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook)

        console.log('It worked')
        return res.status(201).send(book);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});
    }
})

//Route to fetch all books from database
router.get('/fetchBooks', async(req, res) => {
    try {
        const books = await Book.find({})

        return res.status(200).json({
            message: "Data fetched successfully",
            count: books.length,
            result : books
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});
    }
})

//Route to fetch one book from database by id
router.get('/fetchBooks/:id', async(req, res) => {
    try {

        const {id} = req.params;

        console.log(id);
        const book = await Book.findById(id);

        return res.status(200).json({
            message: "Data fetched successfully",
            // count: book.length,
            result : book
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});
    }
})

//Route to update a book
router.put('/updateBook/:id', async(req, res) => {
    try {
        if(!req.body.title ||
            !req.body.author || 
            !req.body.price || 
            !req.body.availability || 
            !req.body.publishYear){
                return res.status(400).send({message: 'Send all required fields: title, author, price, availability, publishYear'});
            }

            const {id} = req.params;

            const result = await Book.findByIdAndUpdate(id, req.body);
            if(!result) {
                return res.status(404).json({message: 'Book not found'})
            }

            return res.status(200).send({message:'Details updated successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
})

//DELETE a book using ID
router.delete('/deletebook/:id', async(req, res) => {

    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id)

        if(!result) {
            return res.status(404).json({message: 'Failed process'})
        }

        return res.status(200).send({message: 'Book deleted successfully'});    
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
    
})


export default router;