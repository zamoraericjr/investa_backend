import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  draft: {
    name: String,
    desc: String,
    dRef: String,
    fund:[{
      item: String,
      amt: Number
    }],
    pics:[{
      urlId: String,
      refId: Object
    }],
    docs:[{
      urlId: String,
      refId: Object,
      name: String
    }]
  },
  likes:[{
    prod: Number,
  }],
  myInv:[{
      prod: Number,
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
