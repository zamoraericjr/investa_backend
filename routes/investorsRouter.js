import express from "express";
import investorsController from "../controllers/investorsController.js";

const investorsRouter = express.Router();

investorsRouter.get("/", investorsController.getInvestors);
investorsRouter.post("/", investorsController.addInvestor);
investorsRouter.delete("/:id", investorsController.deleteInvestor);
investorsRouter.put("/:id", investorsController.updateInvRec);


export default investorsRouter;
