const User = require('../models/user.model');

const createUser = async (req, res) => {
  try {
	const user = await User.create(req.body);
	return res.status(201).json(user);
  } catch (err) {
	return res.status(400).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
	const users = await User.find();
	return res.json(users);
  } catch (err) {
	return res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
	const user = await User.findById(req.params.id);
	if (!user) return res.status(404).json({ error: "User not found" });
	return res.json(user);
  } catch (err) {
	return res.status(400).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
	if (!user) return res.status(404).json({ error: "User not found" });
	return res.json(user);
  } catch (err) {
	return res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
	const user = await User.findByIdAndDelete(req.params.id);
	if (!user) return res.status(404).json({ error: "User not found" });
	return res.json({ message: "User deleted" });
  } catch (err) {
	return res.status(400).json({ error: err.message });
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
