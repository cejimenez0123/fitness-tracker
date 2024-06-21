const express = require('express');
const prisma = require("../db");

const router = express.Router()


module.exports = function(authMiddleware){
   
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
    router.get('/', authMiddleware, async (req, res) => {
        try {
            const logs = await prisma.log.findMany({
                where: { userId: req.user.id },
                include: {
                    workout: true,
                    activities: {
                        include: {
                            exercise: true
                        }
                    }
                }
            });
    
            res.json({ logs });
        } catch (error) {
            console.error('Error fetching logs:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
    router.delete("/:id",authMiddleware,async (req,res)=>{
       let activities= await prisma.activity.findMany({where:{
            log:{
                id:req.params.id
            }
        }})
        let ids = activities.map((activity)=>activity.id )
        let promises = ids.map(id=>{
            return prisma.set.deleteMany({where:{
                activity:{
                    id:id
                }
            }})
        })
        await Promise.all(promises)
        await prisma.log.delete({
            where: {
                id: req.params.id
            },
        })
        res.status(200).json({message:"Deleted Successfully"})
    })
    return router
}