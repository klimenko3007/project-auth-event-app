import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";

import { userSchema } from "./schemas/UserSchema";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/auth-event";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.Promise = Promise;

const User = mongoose.model("User", userSchema);

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header("Authorization") });
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ loggedOut: true });
  }
};

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/users", async (req, res) => {
  const {
    name,
    surname,
    organisation,
    position,
    participationType,
    email,
    password,
    agreeTerms,
    agreeUpdates,
  } = req.body;
  try {
    const salt = bcrypt.genSaltSync();
    const newUser = new User({
      name,
      surname,
      organisation,
      position,
      participationType,
      email,
      agreeUpdates,
      agreeTerms,
      password: bcrypt.hashSync(password, salt),
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      user: {
        id: newUser._id,
        accessToken: newUser.accessToken,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Could not create user", error });
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user) {
      res.status(200).json({
        success: true,
        user: {
          name: user.name,
          surname: user.surname,
          organisation: user.organisation,
          position: user.position,
          participationType: user.participationType,
          profilePicture: user.profilePicture,
          securityManagement: user.securityManagement,
          internationalThreats: user.internationalThreats,
          theoreticalApproaches: user.theoreticalApproaches,
          humanSecurity: user.humanSecurity,
          peaceConflict: user.peaceConflict,
          openingSession: user.openingSession,
          closingSession: user.closingSession,
        },
      });
    } else {
      res.status(404).json({ message: "User not found", error });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request", error });
  }
});

app.post("/sessions", async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        user: {
          id: user._id,
          accessToken: user.accessToken,
        },
      });
    } else {
      res.status(404).json({ message: "Could not find user", error });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request", error });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
