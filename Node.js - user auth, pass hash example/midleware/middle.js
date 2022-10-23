const isEmail = require("is-email");
const userSchema = require("../schemas/userSchema");
const isImageURL = require("image-url-validator").default;

module.exports = {
  emailValid: (req, res, next) => {
    const { email } = req.body;
    if (!isEmail(email))
      return res.send({ error: true, msg: "Iveskite veikianti emaila" });
    next();
  },
  passwordsValid: (req, res, next) => {
    const { password, secondPassword } = req.body;
    if (password !== secondPassword)
      return res.send({ error: true, msg: "kodas nesutampa" });
    if (secondPassword.length <= 5 || secondPassword.length >= 20)
      return res.send({
        error: true,
        msg: "kodo ilgis turi buti nuo 5 iki 20 raidziu/skaiciu",
      });
    next();
  },
  userValid: async (req, res, next) => {
    const { email } = req.body;
    const userExists = await userSchema.findOne({ email });
    console.log(userExists);
    if (userExists) {
      return res.send({ error: true, msg: "Toks emailas jau yra" });
    }
    next();
  },
  imageUrlValid: async (req, res, next) => {
    const { photo } = req.body;

    if (!photo.includes("http") || photo.length < 0) {
      res.send({
        error: false,
        msg: "Iveskite htpp formato nuoroda",
      });
    } else {
      next();
    }
  },
  createPostValid: async (req, res, next) => {
    const { username, title, photo } = req.body;
    if (!username.length > 0)
      return res.send({ error: true, msg: "username is missing" });

    if (!title.length > 0)
      return res.send({ error: true, msg: "title is missing" });

    if (!photo.length > 0 || !photo.includes("http"))
      return res.send({ error: true, msg: "photo have to start with http" });
    next();
  },
};
