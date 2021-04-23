const express = require("express");

const router = express.Router();
const Users = require("../models/user");


router.get("/", async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (err) {
      res.send(err.message);
    }
  });
  
  
  router.post("/add", async (req, res) => {
    const users = new Users({
      username: req.body.username,
    });
  
    try {
      const newUsers= await users.save();
      res.json('User added');
      res.json(newUsers);
    } catch (err) {
      res.json({ message: err });
    }
  });

  module.exports=router;