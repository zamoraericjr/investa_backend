import User from "../models/User.js";
import uploadFile from "../routes/uploadFile.js";

async function getUsers(req, res) {
  const users = await User.find({});
  return res.json(users);
}

async function register(req, res, next) {
  const {username, name, password, tempPics} = req.body;

  // const saltRounds = 10;
  // const passwordHash = await bcrypt.hash(password, saltRounds);

  const user1 = new User({
    username,
    name,
    password,
    tempPics
  });

  try {
    const savedUser = await user1.save();

    return res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
}

async function editUser(req, res, next){

  const id = req.params.id;
  const file = req.file;

  const user = await User.findById(id);
  const photoInfo = await uploadFile(file); 

  const newTemp = {
    name: photoInfo,
    url: photoInfo
}
  try {

    user.tempPics = user.tempPics.concat(newTemp);
await user.save();

    if (!updateTemp) return res.status(404).send({ error: "Not found!" });

    return res.status(200).json(newTemp);
  } catch (error) {
    next(error);
  }
}

export default {
  register,
  getUsers,
  editUser
};