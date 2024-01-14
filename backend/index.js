import express from "express";
import {PORT, mongoDBUrl} from "./config.js"
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

//this is the like the grandparent component, over here we connect mongoose, for our backend to send data to mongoDB. Also here we will 
// import the routes also and append it to a parent Url such as /books/routes. www.google.com/books is the parent url.

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for CORS policy
app.use(cors()); //Allows all origin with the default of cors(*)

// app.use(cors({
//     origin: 'http://localhost:3000',
//     method: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// })) //Allows custom origins

//Route to fetch example
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to the Bookstore')
})

app.use('/books', bookRoutes);

mongoose
    .connect(mongoDBUrl)
    .then(() => {
        console.log('App connected successfully');
        app.listen(PORT, () => {
            console.log(`App listening on port: ${PORT}`);
        })
    })
    .catch(err => 
        console.log(err)
)