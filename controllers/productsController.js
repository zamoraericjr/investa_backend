import Product from "../models/Product.js";

async function getProducts(req, res, next) {
  try {

    const prods = await Product.find({});
    return res.json(prods);
  } catch (error) {
    next(error);
  }
}


async function deleteProduct(req, res, next) {
  const id = req.params.id;
  
  try {

    await Product.findByIdAndDelete(id);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
}

async function addProduct(req, res, next) {

  const {
    key,
    auth,
    authId,
    date,
    name,
    desc,
    fRef,
    fund,
    pics,
    docs,
    stat,
    growth,
    profits,   
    invs   
  } = req.body;

  const prod = new Product({
    key,
    auth,
    authId,
    date,
    name,
    desc,
    fRef,
    fund,
    pics,
    docs,
    stat,
    growth,
    profits,      
    invs
  })

  try {

    const saveProduct = await prod.save();

    return res.status(201).json(saveProduct);

  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next){

  const id = req.params.id;
  const { stat, growth, profits, invs} = req.body;
  const update = {
    stat,
    growth,
    profits,
    invs
  };

  try {
    const updatedProd = await Product.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!updatedProd) return res.status(404).send({ error: "Not found!" });

    return res.status(200).json(updatedProd);
  } catch (error) {
    next(error);
  }
}

export default {
    getProducts,
    deleteProduct,
    addProduct,
    updateProduct
};