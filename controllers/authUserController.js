import userModel from "../models/userModel.js";

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  res.json({ name: user.name, email: user.email, role: user.role });
};

const signup = async (req, res) => {
  const user = await userModel.create(req.body);
  res.json(user)
};

export { signin,signup };
