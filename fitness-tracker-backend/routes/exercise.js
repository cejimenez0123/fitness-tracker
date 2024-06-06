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
    router.post("/",authMiddleware, async (req,res)=>{
            const {name,type,muscle}=req.body
            console.log(name,type,muscle)
            const user = req.user
            const exerciseType = validateExerciseType(type)
            const muscleType = validateMuscleType(muscle)
            const exercise = await prisma.exercise.create({
                data: {
                    name: name,
                    user:{
                        connect:{
                            id: user.id
                        }
                    },
                    muscle: muscleType,
                    type:exerciseType
                }})
                res.status(201).json({exercise:exercise})
        })
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
            await prisma.exercise.delete({
                where: {
                    id: req.params.id
                },
            })
        res.status(200).json({message:"Deleted Successfully"})
    })

    
    return router
}