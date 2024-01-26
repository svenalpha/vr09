import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import "../app.css";
import {module_StrClass,
        module_StrClass1,module_StrClass2}  from "../css1.module.css";

import GetEntries from "../GetEntries";     
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function About() {
  const [userz,setUserz]=useState([]);
useEffect(() =>{ 
  axios.get("/userz")
  .then(res =>{setUserz(res.data)
              }
       )
  .catch(err =>{console.log(" catch err = ",err)
               }
        )     

               },[] 
         );


  return (
    <>
     <h1>About</h1> 
     <h4>above userz</h4>



      {userz.map(usar =>(
        <div key={usar.id}>                 
          <h4>{usar.name}</h4>
          <p>{usar.age}</p>                     
         </div>              
                        )              
                )
      } 
      <h4>below userz</h4>


      <h4 className="strClass">with fetch using strClass from   app.css  inside About pagee</h4>  
      <h4 className={module_StrClass}>with fetch using module_StrClass within curly brackets  inside About pagee</h4>
      <h4 className={module_StrClass1}>with fetch using module_StrClass1 hhhhhhhhhh  inside About pagee</h4>
      <h4 className={module_StrClass2}>with fetch using module_StrClass1 hhhhhhhhhh  inside About pagee</h4>
      <h4>above GetEntries</h4>
      
      <h4>below GetEntries</h4>

      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
