import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true }
}, { timestamps: true });

const wishlistModel = mongoose.model('florawishlist', wishlistSchema)

export default wishlistModel