import mongoose from 'mongoose';
mongoose.models = {};
mongoose.modelSchemas = {};


const Schema = mongoose.Schema;

const workoutSchema= new Schema({
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

/* module.exports = mongoose.model('WorkoutModel', workoutSchema);  */

//var WorkoutModelDb;
//if (mongoose.models.WorkoutModelDb) {WorkoutModelDb = mongoose.models('WorkoutModelDb');
//                                    }else{WorkoutModelDb= mongoose.model("WorkoutModel",workoutSchema);
//                                         }        
//if (mongoose.models.WorkoutModelDb) {WorkoutModelDb = mongoose.model('WorkoutModels');  
//                                    }else{WorkoutModelDb= mongoose.model("WorkoutModels",workoutSchema);
//                                         }    

//try {WorkoutModelDb = mongoose.model('WorkoutModelDb'); 
//    } catch (error) {WorkoutModelDb= mongoose.model("WorkoutModelDb",workoutSchema);
//                    }            


//var WorkoutModelDb = mongoose.models.WorkoutModelDb ||mongoose.model("WorkoutModel",workoutSchema);
//module.exports = mongoose.model();


//const WorkoutModelDb= mongoose.models['WorkoutModel'] || mongoose.model("WorkoutModel",workoutSchema);  
//const WorkoutModelDb= mongoose.models['WorkoutModel'] || mongoose.model("WorkoutModel",workoutSchema);  
const WorkoutModelDb= mongoose.model("WorkoutModel",workoutSchema);  
//module.exports = WorkoutModelDb;   
export default WorkoutModelDb;
//export default mongoose.models["WorkoutModelDb"] ?? mongoose.model("WorkoutModelDb",workoutSchema)




/* const db_model_User = mongoose.model('db_model_User',UserSchema); */
/* module.exports = db_model_User; */


