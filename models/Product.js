import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  key: {
    type: Number,
    minLength: 1,
  },

  name: {
    type: String,
    minLength: 1,
  },

  stat: {
    type: Number,
    minLength: 1,
  },

  growth: {
    type: Number,
    minLength: 1,
  },

  id: mongoose.Schema.Types.ObjectId,

  profits:[
    {
    date: {
      type: String,
      required: false,
    },
  
    amt: {
      type: Number,
      required: false,
    },

  }],
  date: {
    type: String,
    minLength: 1,
  },
    
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