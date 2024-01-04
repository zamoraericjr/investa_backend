import express from "express";
import morgan from "morgan";
import cors from "cors";
import investorsRouter from "./routes/investorsRouter.js";
import connectToDB from "./utils/connectToDB.js";
import errorHandler from "./middlewares/errorHandler.js";
import config from "./utils/config.js";
import unknownEndpoint from "./middlewares/unknownEndPoint.js";
import productsRouter from "./routes/productsRouter.js";
import selectedRouter from "./routes/selectedRouter.js";

const MONGODB_URI = config.MONGODB_URI;
const app = express();

connectToDB(MONGODB_URI);

morgan.token("body", function (req, res) {
  return JSON.stringify(req.body);
});

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use(morgan(":method :url :status :body"));

app.use("/investors", investorsRouter);
app.use("/products", productsRouter);
app.use("/selected", selectedRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
