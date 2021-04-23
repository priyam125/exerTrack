const express = require("express");

const router = express.Router();
const Exercises = require("../models/exercise");


router.get("/", async (req, res) => {
    try {
      const exercises = await Exercises.find();
      res.json(exercises);
    } catch (err) {
      res.send(err.message);
    }
  });



  router.post("/add", async (req, res) => {
    const exercises = new Exercises({
      username: req.body.username,
      description: req.body.description,
      duration: Number(req.body.duration),
      date: new Date(req.body.date)
    });
  
    try {
      const newExercises= await exercises.save();
      res.send('Exercise added');
      res.json(newExercises);
    } catch (err) {
      res.json({ message: err });
    }
  });


  router.get("/:exercisesId", async (req, res) => {
    try {
      const exercises = await Exercises.findById(req.params.exercisesId);
      res.json(exercises);
    } catch (err) {
      res.send(err.message);
    }
  });

  router.delete("/:exercisesId", async (req, res) => {
    try {
      const oldexercises = await Exercises.deleteOne({ _id: req.params.exercisesId });
      res.json(oldexercises);
      res.send('Deleted');
    } catch (err) {
      res.send(err.message);
    }
  });

  

  router.patch("/update/:exercisesId", (req, res) => {
    Exercises.findById(req.params.exercisesId)
      .then(exercise => {
        exercise.username =  req.body.username;
        exercise.description =  req.body.description;
        exercise.duration =  Number(req.body.duration);
        //exercise.date =  new Date(req.body.date);

        exercise.save()
          .then(() => res.send('Exercise Updated'))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  });

  /* router.post("/update/:exercisesID", async (req, res) => {
    try {
      const updatedexercises = await Exercises.findById(req.params.id);

        updatedexercises.username =  req.body.username;
        updatedexercises.descripton =  req.body.description;
        updatedexercises.duration =  Number(req.body.duration);
        updatedexercises.date =  Date.parse(req.body.date);

      res.send(updatedexercises);
      res.json(updatedexercises);
      res.send('updated')
    } catch (eror) {
      res.json(eror);
    }
  }); */

  
  module.exports=router;
