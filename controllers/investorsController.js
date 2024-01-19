import Investor from "../models/Investor.js";

async function getInvestors(req, res, next) {
  try {

    const invs = await Investor.find();
    return res.json(invs);
  } 
  catch (error) {
    next(error);
  }
}

async function deleteInvestor(req, res, next) {
  const id = req.params.id;

  try {
    
    await Investor.findByIdAndDelete(id);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
}

async function addInvestor(req, res, next) {

  const {investment, name, prod, recs, uid, date} = req.body;

  const inv = new Investor({
    investment,
    name,
    prod,
    recs,
    uid,
    date
  })

  try {

    const saveInvestor = await inv.save();

    return res.status(201).json(saveInvestor);

  } catch (error) {
    next(error);
  }
}

async function updateInvRec(req, res, next){

  const id = req.params.id;
  const {investment, recs} = req.body;
  const update = {
    investment,
    recs
  };

  try {
    const updatedRec = await Investor.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!updatedRec) 
    
    return res.status(404).send({ error: "Note not found!" });

    return res.status(200).json(updatedRec);
    
  } catch (error) {
    next(error);
  }
}

export default {
    getInvestors,
  addInvestor,
  deleteInvestor,
  updateInvRec
};