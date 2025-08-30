import User from "../models/userModel.js";

// @desc - Get all users
// @route - GET /api/users

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

// @desc - Create a new user
// @route - POST /api/users

export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}