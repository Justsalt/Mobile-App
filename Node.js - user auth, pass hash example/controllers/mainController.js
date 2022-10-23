const userSchema = require("../schemas/userSchema");
const userPostsSchema = require("../schemas/allpostsSchema");

// const { uid } = require("uid");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
    const createUser = await userSchema({
      email,
      password: hash,
    });
    createUser.save();

    res.send({ error: false, data: createUser });
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const userExists = await userSchema.findOne({ email });
    console.log(userExists);
    if (userExists) {
      const compare = await bcrypt.compare(password, userExists.password);
      console.log(compare);
      if (compare) {
        return res.send({
          error: false,
          msg: "geras kodas",
          userData: userExists,
        });
      }
    } else {
      return res.send({ error: true, msg: "blogas kodas" });
    }
  },
  changePhoto: async (req, res) => {
    const { photo, id, name, surname, birthday, phone, gender } = req.body;
    console.log(name);
    console.log(gender);
    console.log(photo);
    console.log(id);

    const newPhoto = await userSchema.findOneAndUpdate(
      { _id: id },
      { $set: { photo, name, surname, birthday, phone, gender } },
      { new: true }
    );

    if (newPhoto) {
      res.send({
        error: false,
        msg: "nuotrauka paupdeitinta",
        userData: newPhoto,
      });
    }
  },
  getUser: async (req, res) => {
    const { id } = req.params;
    const userExists = await userSchema.findOne({ _id: id });
    if (userExists) {
      res.send({
        error: false,
        msg: "Nuotrauka buvo surasta",
        userData: userExists,
      });
    } else {
      res.send({ error: true, msg: "update your photo", userData: userExists });
    }
  },
  userPosts: async (req, res) => {
    const userPost = req.body;

    const creatPosts = await userPostsSchema(userPost);
    creatPosts.save();
    res.send({ ok: creatPosts });
  },
  allUsersPosts: async (req, res) => {
    const getAllPosts = await userPostsSchema.find();

    res.send({
      error: false,
      msg: "nuotraukos gautos",
      posts: getAllPosts,
    });
  },
  userPost: async (req, res) => {
    const { id } = req.params;

    const userPost = await userPostsSchema.find({ _id: id });
    console.log(userPost);
    res.send({
      ok: "ok",
      userPost: userPost,
    });
  },
  userPostSpesificNumber: async (req, res) => {
    let userPosts;
    const { id } = req.params;
    if (Number(id) === 0) {
      userPosts = await userPostsSchema.find().limit(1);
    } else {
      userPosts = await userPostsSchema.find().limit(Number(id));
    }
    res.send({
      error: false,
      msg: "Atfiltruoti postai",
      userPosts: userPosts,
    });
  },
};
