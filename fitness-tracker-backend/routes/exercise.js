const express = require('express');
const prisma = require("../db");

const router = express.Router()
// id  String    @id @default(auto()) @map("_id") @db.ObjectId
//   name String
//   activities Activity[]
//   type Type @default(REPS)
module.exports = function(authMiddleware){
    const ADMIN_UID=""
    router.get("/unprotected", async (req, res)=>{
        const exercises = await  prisma.exercise.findMany({where:{userId: ADMIN_UID}})
        res.json(exercises)
    })
    router.get("/protected", authMiddleware,async (req, res)=>{
       
const exercises = await prisma.exercise.findMany({where:{userId: req.user.id}})
res.json(exercises)
    })
    router.post("/",authMiddleware, async (req,res)=>{
            const {name}=req.body
            const user = req.user
            const exercise = await prisma.exercise.create({
                data: {
                    name: name,
                    user:{
                        connect:{
                            id: user.id
                        }
                    },
                }})
                res.json(exercise)
        })
    router.delete("/:id",authMiddleware,async (req,res)=>{
            await prisma.exercise.delete({
                where: {
                    id: req.params.id
                },
              })
            res.status(201).json({message:"Deleted Successfully"})
        })

    
    return router
}