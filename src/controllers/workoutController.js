


import WorkoutModelDb from "../models/workoutDbModel.js";

//  GET all entries

export const getAllWorkoutEntries = async  (req,res)=>{               
    const workouts = await WorkoutModelDb.find({}).sort({createdAt: -1});  // ie find all, sorted in descending order       
                                    // ....find({reps:20}).... finds all entries where reps=20
    return res.status(200).json(workouts);                              
    //return res.json({mssg: "GET all entries"}); 
    //return;
                                                 }                                              
              
 

//  GET single entry

// Create (ie POST) new entry
export const createWorkoutEntry = async (req,res)=>{
    const {title, reps, load} = req.body;     

    let emptyFields = []; 
    if (!title) {emptyFields.push("title");}
    if (!load) {emptyFields.push("load");}
    if (!reps) {emptyFields.push("reps");}    
    if (emptyFields.length > 0) 
       {return res.status(400).json({error: "please complete all fields",emptyFields})

       }    


    try{const wo = await WorkoutModelDb.create({title,reps,load});
        return res.status(200).json(wo);
  
       }catch (error)
       {
  
        return res.status(400).json({error: error.message});
       } 
    //res.json({mssg: "POST new entry"});
                                                   }                            

// DELETE entry

// UPDATE entry
