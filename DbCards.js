import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
   name: String,
   src: String
});
const cardModel = mongoose.model("card",cardSchema);

export default cardModel