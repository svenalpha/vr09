
import express from 'express';
import WorkoutModelDb from "../models/workoutDbModel.js";
import {getAllWorkoutEntries,
        createWorkoutEntry} from "../controllers/workoutController.js";
import mongoose from 'mongoose';
export const router = express.Router();


router.get("/greeting",(_,res)=>{res.send("good morning!");         
                                }              
          );                                              

router.get("/Env",(req,res)=>{res.json({mssg: "ASDFGHHjhjjuj"});
                             }                          
          );                              

router.get("/about",(req,res)=>{res.json({mssg: "inside About in workout.js"});
                               }                                                                           
          );                                                 


// GET all entries
router.get("/", getAllWorkoutEntries);   //see export const getAllWorkoutEntries in workoutController.js
//   router.get("/",   async (req,res)=>{                    
    //const workouts = await WorkoutModelDb.find({}).sort({createdAt: -1});                    
    //return res.status(200).json(workouts);                               
    //return res.json({mssg: "GET all entries"});                 
    //return;                                                             
    //                             }                                               
    //    );    

// Get single entry          
router.get("/:id",async (req,res)=>{                         
    const {id} = req.params;                   
                                               
    if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
        return res.status(404).json({error: "not a valid id"});
    const workout = await WorkoutModelDb.findById(id); 
    if (!workout) {return res.status(404).json({error: "no such entry"});}
    return res.status(200).json(workout);             
    //res.json({mssg: "GET single entry"});               
                                   }                                            
          );                                
// POST new entry   
router.post("/", createWorkoutEntry); //  see export const createWorkoutEntry in workoutController.js  
// router.post("/", async (req,res)=>{                 
 // const {title, reps, load} = req.body;
 // try{const wo = await WorkoutModelDb.create({title,reps,load});
 //     return res.status(200).json(wo);
 //    }catch (error)                          
 //    {return res.status(400).json({error: error.message});
 //    }                                         
 // //res.json({mssg: "POST new entry"});
 //                                  }                                             
 //        );                            

router.delete("/:id",async (req,res)=>{
    const {id} = req.params;                   
    if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
        return res.status(404).json({error: "not a valid id"});
                                                 
    const workout = await WorkoutModelDb.findOneAndDelete({_id : id});   
    if (!workout) {return res.status(400).json({error: "no such entry"});}
    return res.status(200).json(workout);             
                                      }                                                                       
             );   // end  router.delete("/:id",async (req,res)=>{                         

router.patch("/:id",async (req,res)=>{
    const {id} = req.params;                                       
    if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
        return res.status(404).json({error: "not a valid id"});                 
                                                                            
    const workout = await WorkoutModelDb.findOneAndUpdate({_id : id},{...req.body});         
    if (!workout) {return res.status(400).json({error: "no such entry"});}           
    return res.status(200).json(workout);                                                       
                                     }                                                                                                         
            );  



router.get("*",(req,res)=>{res.json({mssg: "404/404/404/404"});
                          }             
          );                                   

/* module.exports=router; */
//export default router;

