import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import "../app.css";
import {module_StrClass,
        module_StrClass1,module_StrClass2}  from "../css1.module.css";

import GetEntries from "../GetEntries";     
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { json } from "react-router-dom";




const doEntriesx =  async () => 
{console.log("in GetEntriesx,  pre fetch     ");
//await fetch('http://localhost:5173/getWorkouts')
 await fetch('/api/getWorkout')
       .then((response) => response.json())
       .then((data) => {setItems(data);
                       }
            )  
        .then(function (response){         
         console.log(" message message");           
                                 }            
             )                           
}    //  end doEntriesx





export default function About() {
  const [userz,setUserz]=useState([]);
  const [blogs,setBlogs] = useState(null); 



  const doLoad =  async () => 
  {console.log("in About.jsx,  preeeee fetch('http://localhost:5173/src/db.json/blogs ");
  //await fetch('http://localhost:5173/src/db.json/')
  //await fetch('http://localhost:5173/src/db.json/')

  //await axios.get('/userz')
  //       .then((res) =>  {return res.json();})          //{setBlogs(res.data)})
  //       .then((data) => {console.log(" data =",data);}) 
  //       .catch(err => {console.log("in About.jsx, error message following fetch('http://localhost:5173/src/db/blogs",err)});  
  
  
         //await axios.get('/userz')
         //.then((res) => {setUserz(res.data)})
         //.catch(err => {console.log("in About.jsx, error message following axios.get apix/userz",err)});  
  


  //  1 
  console.log("in About.jsx, doLoad No 1");  
  await axios.get("/api/workoutsx/testx")
  //axios.get("/apix/userz")
  //axios.get("http://localhost:5173/userz")
  .then(res1 =>{//setUserz(res.data);
               //console.log("in About.jsx, in doLoad, userz = ",userz);
               console.log("in About.jsx, in doLoad, /api/workoutsx/testx res1.data = ",res1.data) 
               }
       )
  .catch(err1 =>{console.log("catch err1 = ",err1)   
                }             
        );  
 //  1a 
 console.log("in About.jsx, doLoad No 1a");  
 await axios.get("/api/workoutsx/testz")
 //axios.get("/apix/userz")
 //axios.get("http://localhost:5173/userz")
 .then(res1z =>{//setUserz(res.data);
              //console.log("in About.jsx, in doLoad, userz = ",userz);
              console.log("in About.jsx, in doLoad, /api/workoutsx/testz res1z.data = ",res1z.data) 
             }
      )
 .catch(err1z =>{console.log("catch err1z = ",err1z)   
              }         
       );  




 // 2
// console.log("in About.jsx, doLoad No 2"); 
//   await axios.get("/api/workoutsx/testx")
//        //axios.get("/apix/userz")
//        //axios.get("http://localhost:5173/userz")
//        .then(res2 =>{//setUserz(res.data);
//                     //console.log("in About.jsx, in doLoad, userz = ",userz);
//                     console.log("in About.jsx, in doLoad, /api/workoutsx/testx res2.data = ",res2.data) 
//                    }
//             )
//        .catch(err2 =>{console.log("catch err2 = ",err2)   
//                     }         
//              );  
    
// 3   
 console.log("in About.jsx, doLoad No 3, now using const response3"); 
//  //await axios.get("/userz")
    try{
    const response3 = await axios.get("/api/workout/");
    const data3 = await response3.json();
    console.log("data3 = ",data3);
       }catch(err3){ console.log("err3 = ",err3);
                   }
  //await axios.get("/test1")  
  //await fetch("/test1")  


 
  

        //4
  console.log("in About.jsx, doLoad No 4");      
  await axios.get("/api/workout/")    //("/api/workoutsx/testx")
  //axios.get("/apix/userz")
  //axios.get("http://localhost:5173/userz")
  .then(res4 =>{//setUserz(res.data);
               //console.log("in About.jsx, in doLoad, userz = ",userz);
               console.log("in About.jsx, in doLoad, /test1 res4.data = ",res4.data) 
              }
       )
  .catch(err4 =>{console.log("catch err4 of test1= ",err4)   
               }         
        );  



//       //4a
//       console.log("in About.jsx, doLoad No 4a");      
//       await fetch("/api/workout/",{method: 'GET',
//                                    body: JSON.stringify(data),
//                                    headers: {'Content-Type': 'application/json'
//                                             }
//                                   }
//                  )
//       .then(response4a => response4a.json())
//       .then(data => console.log(" 4a data = ",data));           
                  
        //4b
        console.log("in About.jsx, doLoad No 4b");      
        await axios({method: 'GET',
                     url: "/api/workout/",
                     headers:{'Content-Type' : 'application/json',
                              'Accept':'application/json'
                             }
                    }        
                   )    
        .then(res4b =>{//setUserz(res.data);
                     //console.log("in About.jsx, in doLoad, userz = ",userz);
                     console.log("in About.jsx, in doLoad, /test1 res4b.data = ",res4b.data) 
                    }
             )
        .catch(err4b =>{console.log("catch err4b of test1= ",err4b)   
                     }         
              );  
      



      //5
//      console.log("in About.jsx, doLoad No 5");      
//      await axios.get("/api/workouts/test3")
//      //axios.get("/apix/userz")
//      //axios.get("http://localhost:5173/userz")
//      .then(res5 =>{//setUserz(res.data);
//                   //console.log("in About.jsx, in doLoad, userz = ",userz);
//                   console.log("in About.jsx,  doLoad no5, /api/workouts/test3 res5.data = ",res5.data); 
//                  }
//           )
//      .catch(err5 =>{console.log("catch err5 of test1= ",err5)   
//                   }         
//q            );            

            console.log("in About.jsx, doLoad No 6");      
            await axios.get("/api/workouts/test99")
            //axios.get("/apix/userz")
            //axios.get("http://localhost:5173/userz")
            .then(res6 =>{//setUserz(res.data);
                         //console.log("in About.jsx, in doLoad, userz = ",userz);
                         console.log("in About.jsx,  doLoad no5, /api/workouts/test99 res6.data = ",json(res6.data)); 
                        }
                 )
            .catch(err6 =>{console.log("catch err6 of test1= ",err6)   
                         }         
                  );   

                  console.log("in About.jsx, doLoad No 7");      
                  await axios.get("/api/workouts/test99")
                  //axios.get("/apix/userz")
                  //axios.get("http://localhost:5173/userz")
                  .then(res7 =>{//setUserz(res.data);
                               //console.log("in About.jsx, in doLoad, userz = ",userz);
                               console.log("in About.jsx,  doLoad no5, /api/workouts/test99 res7.data = ",json(res7.data)); 
                              }
                       )
                  .catch(err7 =>{console.log("catch err of test1= ",err7)   
                               }         
                        );   

console.log("in About.jsx, doLoad No 8");      
await axios.get("/test99")
//axios.get("/apix/userz")
//axios.get("http://localhost:5173/userz")
   .then(res8 =>{//setUserz(res.data);
   //console.log("in About.jsx, in doLoad, userz = ",userz);
         console.log("in About.jsx,  doLoad no8, /api/workout8/test99 res8.data = ",json(res8.data)); 
                }                 
        )                                                
                        .catch(err8 =>{console.log("catch err of test99= ",err8)   
                                     }         
                              );   
                         
console.log("in About.jsx, doLoad No 8");      
await axios.get("/test88")
//axios.get("/apix/userz")
//axios.get("http://localhost:5173/userz")
 .then(res88 =>{//setUserz(res.data);
 //console.log("in About.jsx, in doLoad, userz = ",userz);
 console.log("in About.jsx,  doLoad no8, /api/workout8/test88 res88.data = ",json(res88.data)); 
              }                 
      )                                                
.catch(err88 =>{console.log("catch err of test88= ",err88)   
              }                          
      );   



  
  
  }    //  end doEntriesx



  
useEffect(() =>{
  doLoad(); 
  //axios.get("/apix/userz")   
 // axios.get("/userz")
 // .then(res =>{setUserz(res.data)
 //             }
 //      )
 // .catch(err =>{console.log(" catch err = ",err)
 //              }
 //       )     

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
      <GetEntries />
      <h4>below GetEntries</h4>

      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
