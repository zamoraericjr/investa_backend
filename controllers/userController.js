import User from "../models/User.js";
import uploadFile from "../utils/uploadFile.js";

async function getUsers(req, res) {
  const users = await User.find({});
  return res.json(users);
}

async function register(req, res, next) {
  const {username, name, password, draft, likes, myInv} = req.body;

  // const saltRounds = 10;
  // const passwordHash = await bcrypt.hash(password, saltRounds);

  const user1 = new User({
    username,
    name,
    password,
    draft,
    likes,
    myInv
  });

  try {
    const savedUser = await user1.save();

    return res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
}

async function createDraft(req, res, next){

  const id = req.params.id;
  const {draft, likes, myInv} = req.body;
  const update = {
    draft,
    likes,
    myInv
  };

  try {
    const draftCreated = await User.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!draftCreated) 
    
    return res.status(404).send({ error: "Not found!" });

    return res.status(200).json(draftCreated);
    
  } catch (error) {
    next(error);
  }
}

export default {
  register,
  getUsers,
  createDraft
};