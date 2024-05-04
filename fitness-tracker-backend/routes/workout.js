const express = require('express');
const prisma = require("../db");

const router = express.Router()

module.exports = function(authMiddleware){
    const ADMIN_UID=""
    router.post("/",authMiddleware, async (req,res)=>{
            const {name}=req.body
            const user = req.user
            const newWorkout = await prisma.workout.create({
                data: {
                    name: task,
                    
                    user:{
                        connect:{
                            id: user.id
                        }
                    },
               
                }})
                res.json(newWorkout)
        })
        router.get('/:id/activity', authMiddleware,async (req,res)=>{
            let activities = await prisma.activity.findMany({where:{
                workout:{
                    id: req.params.id
                }
            }})
            res.json(activities);
    })
        router.delete("/:id",authMiddleware,async (req,res)=>{
            await prisma.workout.delete({
                where: {
                    id: req.params.id
                },
              })
            res.status(201).json({message:"Deleted Successfully"})
        })
        router.put("/:id" ,authMiddleware,async (req,res)=>{
            const id = req.params.id
            const { name }= req.body
            const updateWorkout = await prisma.workout.update({
                where: {
              
                        id: id, 
                    },
                data: {
                    name: name,
                },
              })
            res.json(updateWorkout)
        })
     router.delete('/:id',authMiddleware, async (req, res) => {
        const id = req.params.id
        await prisma.workout.delete({where: {
            id: id,
          }})
     })
       
    
    return router
}
