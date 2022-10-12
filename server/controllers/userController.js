import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModal.js";

const secret = "jaikishansharma1234";

export const SignUp = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      res.status(201).json({ message: "already register" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      // console.log(hashedPass);
      const user = new User({
        userName,
        email,
        password: hashedPass,
      });
      await user.save();
      const userToken = jwt.sign({ email, id: user._id }, secret, {
        expiresIn: "1h",
      });

      res.status(201).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const SingIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    const isCorrectPass = bcrypt.compare(password, oldUser.password);
    if (!oldUser) {
      res.status(404).json({ message: "user is not registerd!" });
    } else if (!isCorrectPass) {
      res.status(400).json({ message: "invalid credentials" });
    } else {
      const token = jwt.sign(
        { email: oldUser.email, id: oldUser._id },
        secret,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ result: oldUser, token });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
