import { signin,signup } from "../controllers/authUserController.js";
import express from "express"
const authUserRouter = express.Router()
authUserRouter.post("/signin",signin)
authUserRouter.post("/signup",signup)
export default authUserRouter