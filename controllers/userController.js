import userModel from "../models/userModel.js";

const showUsers = async (req, res) => {
    const users = await userModel.find();
    res.render("users/index", { users });
};

const addUserForm = (req, res) => {
    res.render("users/add");
};

const addUser = async (req, res) => {
    await userModel.create(req.body);
    res.redirect("/admin/users");
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    await userModel.findByIdAndDelete(id);
    res.redirect("/admin/users");
};

const editUserForm = async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findOne({ _id: id });
    res.render("users/edit", { user });
};

const saveUser = async (req, res) => {
    const id = req.params.id;
    await userModel.findByIdAndUpdate(id, req.body);
    res.redirect("/admin/users");
};

export { showUsers, addUserForm, addUser, deleteUser, editUserForm, saveUser };