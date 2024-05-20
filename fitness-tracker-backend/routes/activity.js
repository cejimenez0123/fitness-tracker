const express = require('express');
const prisma = require("../db");

const router = express.Router()

module.exports = function(authMiddleware){
    const ADMIN_UID=""

    router.post("/",authMiddleware, async (req,res)=>{
            const {exerciseId,logId}=req.body
            const exercise = await prisma.activity.create({
                data: {
                    exercise:{
                        connect:{
                            id: exerciseId
                        }
                    },
                    log:{
                        connect:{
                            id: logId
                        }
                    }
                }})
                res.status(201).json(exercise)
        })
    router.get('/:id/log',authMiddleware, async (req, res)=>{
        const exercise = await prisma.activity.findUnique({where:{
            logId: req.params.id
        },
        include: {
           exercise: true
          },
        })
        res.json(exercise)
    })
    router.delete("/:id",authMiddleware,async (req,res)=>{
            await prisma.activity.delete({
                where: {
                    id: req.params.id
                },
            })
        res.status(201).json({message:"Deleted Successfully"})
    })

    
    return router
}