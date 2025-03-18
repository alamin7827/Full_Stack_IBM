
const mongoose =require('mongoose');

const connectDB =mongoose.connect("mongodb+srv://alaminakhtar8:alamin@cluster0.jwk8k.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0");

module.exports ={
    connectDB
}