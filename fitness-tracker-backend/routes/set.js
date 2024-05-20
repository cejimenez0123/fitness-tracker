const express = require('express');
const prisma = require("../db");

const router = express.Router()
// model Set{
//     id String @id @default(auto()) @map("_id") @db.ObjectId
//     activity Activity @relation(fields: [activityId],references: [id])
//     activityId String @db.ObjectId
//     reps Int
//     count Int
//   }
module.exports = function(authMiddleware){
    const ADMIN_UID=""
   
    router.post("/",authMiddleware, async (req,res)=>{
        const {activityId,reps} = req.body
           
        let activity= await     prisma.set.create({data:{activity:{
                    connect:{
                        id:activityId
                    }
                },reps:reps
        }})
        res.status(201).json({activity:activity})
    })
    router.put("/",authMiddleware, async (req,res)=>{
        const {reps} = req.body
          
        let set = await prisma.set.update({data:{
                reps:reps
        }})
        res.json(set)
    })
   
    
    return router
}