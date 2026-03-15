import { displayProducts } from "../controllers/storeController.js";
import express from "express"
const storeRouter = express.Router()
storeRouter.get("/",displayProducts)
export default storeRouter