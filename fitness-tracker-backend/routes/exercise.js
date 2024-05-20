const express = require('express');
const prisma = require("../db");
const validateExerciseType = require('../core/validateExerciseType');

const router = express.Router()

module.exports = function(authMiddleware){
    const ADMIN_UID=""
    router.get("/unprotected", async (req, res)=>{
        const exercises = await  prisma.exercise.findMany({where:{userId: ADMIN_UID}})
        res.json({exercises:exercises})
    })
    router.get("/protected", authMiddleware,async (req, res)=>{
   
    const exercises = await prisma.exercise.findMany({where:{userId: req.user.id}})
        res.json({exercises:exercises})
    })
    router.post("/",authMiddleware, async (req,res)=>{
            const {name,type}=req.body
            const user = req.user
            const exerciseType = validateExerciseType(type)
            const exercise = await prisma.exercise.create({
                data: {
                    name: name,
                    user:{
                        connect:{
                            id: user.id
                        }
                    },
                    type:exerciseType
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