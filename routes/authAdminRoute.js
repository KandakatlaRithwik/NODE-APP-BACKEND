import { login,loginForm } from "../controllers/authAdminController.js";
import express from "express"

const authAdminRouter = express.Router()

authAdminRouter.get("/",loginForm)
authAdminRouter.post("/",login)

export default authAdminRouter