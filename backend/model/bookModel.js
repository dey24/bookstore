import mongoose from "mongoose";

const {Schema} = mongoose;

//In this file we describe the schema, means, in which format the data will be inserted in the MongoDB server.
const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        availability: {
            type: Boolean,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        }
    },
    {
        timestamps:true,
    }

)

export const Book = mongoose.model('Book', bookSchema);