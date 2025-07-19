import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/update-profile", updateProfile);
router.get("/check-auth", checkAuth);
// etc...

router.post("/signup", (req, res, next) => {
  console.log("Signup route hit");
  signup(req, res, next);
});
router.post("/login", (req, res, next) => {
  console.log("Login route hit");
  login(req, res, next);
});
router.post("/logout", (req, res, next) => {
  console.log("Logout route hit");
  logout(req, res, next);
});
router.post("/update-profile", (req, res, next) => {
  console.log("Update profile route hit");
  updateProfile(req, res, next);
});
router.get("/check-auth", (req, res, next) => {
  console.log("Check auth route hit");
  checkAuth(req, res, next);
});

export default router;
