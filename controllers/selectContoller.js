import Investor from "../models/Investor.js";
import Selected from "../models/Selected.js";

async function getSelected(req, res, next) {
  try {

    const invs = await Selected.find();
    return res.json(invs);
  } 
  catch (error) {
    next(error);
  }
}

async function deleteSelected(req, res, next) {
  const id = req.params.id;

  try {
    
    await Selected.deleteMany();

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
}

async function addSelected(req, res, next) {

  const {prodId, invId, key} = req.body;

  const sel = new Selected({
    prodId,
    invId,
    key
  })

  try {

    const saveSelected = await sel.save();

    return res.status(201).json(saveSelected);

  } 
  catch (error) {
    next(error);
  }
}

export default {
    getSelected,
    deleteSelected,
    addSelected
};