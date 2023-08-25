
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";

export const WorkoutDisplayDetails =({workout})=>
{const {dispatch} = useWorkoutsContext();

const handleClick = async ()=>
  {const response = await fetch("/api/workout/" + workout._id,{method:"DELETE"});
   const json = await response.json();
   if (response.ok)     
    {dispatch({type: "DELETE_WORKOUT",payload: json});

    }
  }

return(<>  

<div className="workout-details">
   <h4>inside WorkoutDisplayDetails.js</h4>
    <h4>{workout.title}</h4>
    <p><strong>load in kg: </strong>{workout.load}</p>
    <p><strong>Reps: </strong>{workout.reps}</p>
    <p>{workout.createdAt}</p>
    <span onClick={handleClick}>delete</span>
 </div>
    </>)
}




