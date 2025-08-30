import User from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// SECRET FOR JWT TOKEN
const secret = process.env.JWT_SECRET;

export const signup = async (req, res, next) => {
  try {
    const { username, email, password, isAdmin = true } = req.body;

    // check is username already exist
    const isUserNameExist = await User.findOne({ username });
    if (isUserNameExist) {
      return res.status(400).json({ message: 'Username already exist' });
    }

    // check if user already exist
    const isUserExist = await IUser.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: 'User already exist' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // create jwt token
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1d' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}