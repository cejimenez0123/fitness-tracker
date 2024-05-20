const express = require('express');
const prisma = require("../db");

const router = express.Router()
// model Log{
//     id  String    @id @default(auto()) @map("_id") @db.ObjectId
//     workout Workout  @relation(fields: [workoutId], references: [id])
//     workoutId String  @db.ObjectId
//     date DateTime @default(now())
//     activities Activity[]
// }

module.exports = function(authMiddleware){
    const ADMIN_UID=""
    router.post("/",authMiddleware, async (req,res)=>{
            const {workoutId}=req.body
            const log = await prisma.log.create({
                data: {
                    workout:{
                        connect:{
                            id:workoutId
                        } 
                    },
                }})
                res.status(201).json(log)
        })
    router.get('/',authMiddleware,async (req,res)=>{

        const logs = await prisma.log.findMany({where:{ 
            workout:{
                userId: req.user.id
            }
        },include:{
            workout:true
        }})
        res.json(logs)
    })
    router.delete("/:id",authMiddleware,async (req,res)=>{
            await prisma.log.delete({
                where: {
                    id: req.params.id
                },
              })
            res.status(201).json({message:"Deleted Successfully"})
        })

    
    return router
}