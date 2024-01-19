import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  id: mongoose.Schema.Types.ObjectId,
  key: Number,

  auth: String,
  authId: String,
  date: String,

  name: String,
  desc: String,
  fRef: String,
  fund:[{
    item: String,
    amt: Number
  }],
  pics:[
    {
    urlId: String,
    refId: Object,
  }],
  docs:[
    {
    urlId: String,
    refid: Object,
    name: String,
  }],

  stat:Number,
  growth: Number,
  profits:[
    {
    date: String,
    amt: Number,
  }],
  invs: Number,
     
});

productSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Product = mongoose.model('product', productSchema);

export default Product;