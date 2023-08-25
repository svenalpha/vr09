started with a08/vr08
- then added TNN mern stack tutorial stuff:
- doesn't contain security measures

do: npm run dev   //  for development version     
do: npm run build  // for production version (ie creates dist directory)
difficulty with preview of build version, at command prompt, so do:
NODE_ENV=production node server  // which seemed to work correctly 



(almost) working model of multi-page SSR vite/express/react from: 

https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react

slightly changed with:
1) because of age of this demo project, all dependantcies in 
package.json updated with newest version 
2)  a bit of css added
3)another page "extra" added
4) UseEffectFetchData added 



to make work:
in package.json
          "@vitejs/plugin-react": "workspace:*",
provoked  an error. It was changed to:
          "@vitejs/plugin-react": "^4.0.4",





https://stackoverflow.com/questions/45390377/react-how-to-pass-returned-data-from-an-exported-function-to-a-component



routes removed from server.js to workoutRoutes.js. POST & GET functions in turn are removed and replaced by functions
call functions in workoutController.js. Only 2 just for proof of concept. 




const WorkoutDisplayDetails =({workout})=>
{return(<>
  <div className="workout-details">
   <h4>inside WorkoutDisplayDetails.js</h4>
    <h4>{workout.title}</h4>
    <p><strong>load in kg: </strong>{workout.load}</p>
    <p><strong>Reps: </strong>{workout.reps}</p>
    <p>{workout.createdAt}</p>
 </div>
    </>)
}

export default WorkoutDisplayDetails;





the "error message" notice uses class name change to toggle highlightof 
missed entry fields. 

.module_StrClass inside css1.module.css file is used in About.jsx with
import {module_StrClass}  from "../css1.module.css";  // ie only 1 class is imported
....<h4 className={module_StrClass}>XYZ</h4>



/* conditional classes. see CreateWorkoutForm   input */
input.error{border: 1px solid var(--error); color:green;}


