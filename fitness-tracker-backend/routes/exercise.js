const express = require('express');
const prisma = require("../db");
const validateExerciseType = require('../core/validateExerciseType');
const validateMuscleType = require('../core/validateMuscleType');

const router = express.Router()

module.exports = function(authMiddleware){
  
    router.get("/unprotected", async (req, res)=>{
        const exercises = await  prisma.exercise.findMany()
        
        res.json({exercises:exercises})
        console.log(exercises);
    })
    router.get("/protected", authMiddleware,async (req, res)=>{
        const exercises = await prisma.exercise.findMany({
            where:{userId: req.user.id}
        })
        res.json({exercises:exercises})
    })
    router.post("/", authMiddleware, async (req, res) => {
        const { exercise } = req.body; // Assuming exercises is an array of exercise objects
        console.log(exercise);
        const user = req.user;
    
        try {
            const createdExercises = await Promise.all(exercise.map(async (exerciseData) => {
                const { name, type, muscle } = exerciseData;
    
                const exerciseType = validateExerciseType(type);
                const muscleType = validateMuscleType(muscle);
    
                const createdExercise = await prisma.exercise.create({
                    data: {
                        name: name,
                        user: {
                            connect: {
                                id: user.id
                            }
                        },
                        muscle: muscleType,
                        type: exerciseType
                    }
                });
    
                return createdExercise;
            }));
    
            res.status(201).json({ exercise: createdExercises });
        } catch (error) {
            console.error("Error creating exercises:", error);
            res.status(500).json({ error: "Failed to create exercises" });
        }
    });
    router.post("/admin",authMiddleware, async (req,res)=>{
            const {name,type,muscle}=req.body
            const muscleType = validateMuscleType(muscle)
            const exerciseType = validateExerciseType(type)
            const exercise = await prisma.exercise.create({
                data: {
                    name: name,
                    type:exerciseType,
                    muscle: muscleType
                }})
                res.status(201).json({exercise:exercise})
        })
    router.delete("/:id",authMiddleware,async (req,res)=>{
            await prisma.workoutExercise.deleteMany({where:{
                exerciseId: req.params.id
            }})
            await prisma.activity.deleteMany({where:{
                exerciseId: req.params.id
            }})
            await prisma.exercise.delete({
                where: {
                    id: req.params.id
                },
            })
        res.status(200).json({message:"Deleted Successfully"})
    })

    
    return router
}