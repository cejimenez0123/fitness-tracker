const express = require('express');
const prisma = require("../db");

const router = express.Router()

module.exports = function(authMiddleware){
   

    router.post("/", authMiddleware, async (req, res) => {
        const { exerciseIds, logId } = req.body; 
        console.log(exerciseIds, logId);
    
        const activities = await Promise.all(exerciseIds.map(async (exerciseId) => {
            const activity = await prisma.activity.create({
                data: {
                    exercise: {
                        connect: {
                            id: exerciseId
                        }
                    },
                    log: {
                        connect: {
                            id: logId
                        }
                    },
                    user: {
                        connect: {
                            id: req.user.id
                        }
                    }
                },
                include: {
                    exercise: true,
                    log: true
                }
            });
            return activity;
        }));
    
        res.status(201).json({ activities: activities });
    });

    router.get("/:id/set",authMiddleware,async (req,res)=>{
       const sets = await prisma.set.findMany({where:{
            activityId:req.params.id
        }})

        res.status(200).json({sets:sets})

    })
    router.delete("/:id",authMiddleware,async (req,res)=>{
            await prisma.activity.delete({
                where: {
                    id: req.params.id
                },
            })
        res.status(200).json({message:"Deleted Successfully"})
    })

    
    return router
}