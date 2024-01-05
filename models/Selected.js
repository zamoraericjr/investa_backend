import mongoose from "mongoose";

const selectedSchema = new mongoose.Schema({

  invId: {
    type: String,
    minLength: 1,
  },

  prodId: {
    type: String,
    minLength: 1,
  },

  id: mongoose.Schema.Types.ObjectId,
  key: Number,
  
});

selectedSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Selected = mongoose.model('selected', selectedSchema);

export default Selected;