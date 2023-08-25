import mongoose from 'mongoose';
//const mongoose= require('mongoose');

const Schema = mongoose.Schema;
/*  const UserSchema = new mongoose.Schema({   */
const workoutSchema= new mongoose.Schema({
title:{type: String,
      required: true
      },
reps: {type: Number,
         required: true
        },
load: {type: Number,
       required: true
      },
date:{type: Date,
      default: Date.now
     }                                         
}, {timestamps: true});
const WorkoutModelDb= mongoose.model("WorkoutModel",workoutSchema);                                      
/* module.exports = WorkoutModelDb;   */
export default WorkoutModelDb;





/* const db_model_User = mongoose.model('db_model_User',UserSchema); */
/* module.exports = db_model_User; */

