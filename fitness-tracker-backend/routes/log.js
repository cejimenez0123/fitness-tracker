const express = require('express');
const prisma = require("../db");

const router = express.Router()


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
                    user:{
                        connect:{
                            id: req.user.id
                        }
                    }
                }})
            res.status(201).json({log:log})
    })
    router.get('/:id/workout',authMiddleware, async (req, res)=>{
            const workout = await prisma.activity.findFirst({where:{
                logId: req.params.id
            },
            include: {
               exercise: true
              },
            })
            res.json({workout: workout})
    })
    router.get('/',authMiddleware,async (req,res)=>{

        const logs = await prisma.log.findMany({where:{ 
            workout:{
                userId: req.user.id
            }
            },include:{
                workout:true
            }
        })
        res.json({logs:logs})
    })
    router.delete("/:id",authMiddleware,async (req,res)=>{
        await prisma.log.delete({
            where: {
                id: req.params.id
            },
        })
        res.status(200).json({message:"Deleted Successfully"})
    })
    return router
}