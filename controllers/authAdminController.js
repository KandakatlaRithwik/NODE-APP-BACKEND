import userModel from "../models/userModel.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  if (user) res.redirect("/admin/products");
  else res.redirect("/");
};

const loginForm = async (req,res) => {
    res.render("auth/login")
}
export {login,loginForm}