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
   router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const logId = req.params.id;
        const log = await prisma.log.findUnique({
            where: {
                id: logId
            },
            include: {
                activities: {
                    include: {
                        sets: true
                    }
                }
            }
        });

      

        const deleteSetPromises = log.activities.map(activity =>
            prisma.set.deleteMany({
                where: {
                    activityId: activity.id
                }
            })
        );

        await Promise.all(deleteSetPromises);

        await prisma.activity.deleteMany({
            where: {
                logId: logId
            }
        });

        await prisma.log.delete({
            where: {
                id: logId
            }
        });

        res.status(200).json({ message: "deleted" });
    } catch (error) {
        console.error("Error deleting full data because: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

    return router
}