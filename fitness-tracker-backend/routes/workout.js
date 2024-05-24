const express = require('express');
const prisma = require("../db");


const router = express.Router()

module.exports = function(authMiddleware){

    router.post("/",authMiddleware, async (req,res)=>{
            const {name}=req.body
            const user = req.user
            const newWorkout = await prisma.workout.create({
                data: {
                    name: name, 
                    user:{
                    connect:{
                        id: user.id
                        }
                    },}
        })
        res.json({workout:newWorkout})
    })
    router.post("/admin",authMiddleware, async (req,res)=>{
        const {name}=req.body
        const newWorkout = await prisma.workout.create({
            data: {
                name: name, 
                }
    })
    res.json({workout:newWorkout})
})
        router.get("/",authMiddleware, async (req, res) => {
                let adminExercises = await prisma.workout.findMany({where:{
                    id: null}
                })
                let userExer = await prisma.workout.findMany({
                where:{userId: req.user.id}})
                let array = [...adminExercises,...userExer]
                res.json({workouts: array})

        })
        router.get("/:id/exercise",authMiddleware, async (req, res) => {
            let workout = await prisma.workout.findFirst({where:{
                id: req.params.id},
                include:{
                    workoutExercises:true
                }
            })
           
            res.json({workout: workout})

    })
    router.get('/:id/activity', authMiddleware,async (req,res)=>{
            let activities = await prisma.activity.findMany({where:{
                workout:{
                    id: req.params.id
                }
            },include:{
                exercise: true
            }}) 
            res.json(activities);
    })
        router.delete("/:id",authMiddleware,async (req,res)=>{
            await prisma.workout.delete({
                where: {
                    id: req.params.id
                },
              })
            res.status(200).json({message:"Deleted Successfully"})
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
            res.json({workout:updateWorkout})
        })
        router.post('/:workoutId/exercise/:exerciseId',authMiddleware,async (req,res)=>{
            const {workoutId,exerciseId}= req.params

            let workout = await prisma.workoutExercise.create({data:{
                workout:{
                    connect:{
                        id:workoutId,
                    }
                },
                exercise:{
                    connect:{
                        id:exerciseId,
                }
            
                }}
            ,include:{
                workout:true,
                exercise:true
            }})

            res.json({workout})
        })
        router.delete('/exercise/:id',authMiddleware,async (req,res)=>{


            await prisma.workoutExercise.delete({where:{
                id: req.params.id
            }})
              
            res.status(200).json({message:"Deleted Successfully"})

        })
        router.delete('/:id',authMiddleware, async (req, res) => {
        const id = req.params.id
        await prisma.workout.delete({where: {
            id: id,
          }})
          res.status(200).json({message:"Deleted Successfully"})
     })
       
    
    return router
}
