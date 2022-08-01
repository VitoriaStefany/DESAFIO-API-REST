import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017', {dbName:"Desafio3"});

let db = mongoose.connection;

export default db;