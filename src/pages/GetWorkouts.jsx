import { useEffect } from "react";    //xxx useState 
import {WorkoutDisplayDetails} from "../components/WorkoutDisplayDetails.jsx"
import {CreateWorkoutForm} from "../components/CreateWorkoutForm.jsx"
import {UpdateWorkoutForm} from "../components/UpdateWorkoutForm.jsx"

import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";

// import { WorkoutModelDb }  from "../models/workoutDbModel.js";

import GetEntries from "../GetEntries";



//import { MongoClient, ServerApiVersion } from 'mongodb';
//import { WorkoutModelDb } from "../models/workoutDbModel.js";
//const url = 'http://localhost:5173/api/workout';      //  const url = 'https://api.github.com/users';  
const url =  '/api/workout'; 
//const urlx = 'http://localhost:5173/api/workoutsx/';
//  const urlx = 'http://localhost:5173/api/workoutsx/testx';
const urlx = 'http://localhost:5173/testy';
//'mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority';

export default function GetWorkouts() 
{
 // xxx  const [workouts, setWorkouts] = useState(null);
console.log("in GetWorkouts  pre useWorkoutsContext");
const {workouts,dispatch} = useWorkoutsContext();  
console.log("in GetWorkouts getAllWorkouts workouts = ",workouts);
console.log("in GetWorkouts  post useWorkoutsContext");
useEffect(() => { getAllWorkouts(); },[]);

const getAllWorkouts = async () => 
 {console.log("in GetWorkouts/getAllWorkouts first line");


//WorkoutModelDb.find().sort({createdAt: -1}) /* sort to go from newest to oldest */
////.then((result)=>{res.render("index",{titlex: "All Blogs",blogs: result});})
//    .then((result)=>{console.log("result of find = ",result);})
//    .catch((error)=>{console.log(error);}); 

 

/*DD*/
  console.log("urlx after .find = ",urlx);
  //const response = await fetch(url);
  const response = await fetch(urlx);
 
  console.log("in GetWorkouts between const response and const json. reponse = ",response);
  const json = await response.json();
  console.log("in getWorkouts, response = ",response);
  console.log("in getWorkouts, json = ",json);
  if  (response.ok)
   {//x setWorkouts(json);
    console.log("in GetWorkouts, before dispatch is invoked. json =",json);
     dispatch({type: "SET_WORKOUTS", payload: json});
      console.log("in getAllWorkouts, workouts = ",workouts);     
   }  
/*DD*/
 };  // end const getAllWorkouts = async () =>           


return(<>     

 <h1>GetWorkouts</h1>
 console.log("pre GetEntries");

console.log("post GetEntries");


 <h4>iiiiiiiinside GetWorkouts</h4>

 {/* display not using  dedicated component file  */}       
 <div className="workouts">
   <h4>beginning inside GetWorkouts.jsx</h4>  

    {workouts && workouts.map((workout)=>(     // ie only fires if workouts is positive 
                <div key={workout._id}>                                 
                  <p>{workout.title}</p>                     
                </div>                  )                          
                            )                
    }
      
   <h4>ending inside GetWorkouts.jsx</h4>  
   <CreateWorkoutForm />               
 </div>   {/*  end   {workouts && workouts.map   */}   


 {/* alternative display, using dedicated component file  */}    
 <div className="workouts">
 <h4>beginning loop to GetWorkouts/WorkoutDisplyDetails</h4>
   {workouts && workouts.map((workout)=>(     // ie only fires if workouts is positive 
                <WorkoutDisplayDetails key={workout._id} workout ={workout} />                                  
                                        )                                           
                            ) 
   }  
 <h4>end loop to GetWorkouts/WorkoutDisplyDetails</h4>
 {/* <UpdateWorkoutForm /> */}                                                                                                                 
 </div>   {/*  end   {workouts && workouts.map   */}                  


                       
   </>)
}  //  end  export default function GetWorkouts() 





