import userModel from "../models/userModel.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  if (user) res.render("home");
  else res.redirect("/admin");
};

const loginForm = async (req,res) => {
    res.render("auth/login")
}
export {login,loginForm}