import mongoose from "mongoose";

const investorSchema = new mongoose.Schema({
  investment: {
    type: Number,
    minLength: 1,
  },

  name: {
    type: String,
    minLength: 2,
  },

  prod: {
    type: Number,
    minLength: 1,
  },

  id: mongoose.Schema.Types.ObjectId,
  uid: String,
  date: String,

  recs:[
    {
    date: {
      type: String,
      minLength: 1,
      required: true,
    },
  
    amt: {
      type: Number,
      minLength: 1,
      required: true,
    },
  }],
  
});

investorSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Investor = mongoose.model('investor', investorSchema);

export default Investor;