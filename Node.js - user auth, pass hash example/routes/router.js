const express = require("express");
const router = express.Router();
const {
  emailValid,
  passwordsValid,
  userValid,
  imageUrlValid,
  createPostValid,
} = require("../midleware/middle");

const {
  register,
  login,
  changePhoto,
  getUser,
  userPosts,
  allUsersPosts,
  userPost,
  userPostSpesificNumber,
} = require("../controllers/mainController");

router.post("/register", emailValid, passwordsValid, userValid, register);
router.post("/login", login);
router.post("/changePhoto", imageUrlValid, changePhoto);
router.get("/userData/:id", getUser);
router.post("/createPost", createPostValid, userPosts);
router.get("/getAllPosts", allUsersPosts);
router.get("/userPost/:id", userPost);
router.get("/usersPostsLimit/:id", userPostSpesificNumber);

module.exports = router;
