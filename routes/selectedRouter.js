import express from "express";

import selectContoller from "../controllers/selectContoller.js";

const selectedRouter = express.Router();

selectedRouter.get("/", selectContoller.getSelected);
selectedRouter.post("/", selectContoller.addSelected);
selectedRouter.delete("/:id", selectContoller.deleteSelected);

export default selectedRouter;
