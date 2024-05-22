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
    
    router.post("/",authMiddleware, async (req,res)=>{
        const {activityId,reps} = req.body
           
        let set= await prisma.set.create({data:{
                    activity:{
                        connect:{id:activityId}
                    }
                ,reps:reps
        }})
        res.status(201).json({set:set})
    })
    router.put("/:id",authMiddleware, async (req,res)=>{
        const {reps} = req.body
          
        let set = await prisma.set.update({where:{id: req.params.id},
            data:{
                reps:reps
            }
        })
        res.status(201).json({set:set})
    })
    router.delete("/:id",authMiddleware, async (req,res)=>{
        await prisma.set.delete({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({message:"Deleted Successfully"})
    })
    return router
}