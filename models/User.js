import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  name: String,
  password: String,

  tempPics:[
    {
    name: {
      type: String,
      required: false,
    },
  
    url: {
      type: String,
      required: false,
    },

  }],

});

userSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = mongoose.model("user", userSchema);

export default User;
