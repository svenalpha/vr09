





import React, { useState, useEffect } from 'react';
import axios from "axios";


import mongoose from 'mongoose';
import  WorkoutModelDb     from "./models/workoutDbModel.js";  

//const mongoose =require("mongoose");
//const Blag = require("./models/blogModel");

//const app = require('../app');
//const { set } = app;


//var mongoose = require("mongoose");   var Comment = require('./models/comment')
//const  WM  =  import WorkoutModelDb from "./models/workoutDbModel.js";  
//import app, { set } from '../app';
//import xxx,  { WorkoutModelDb } from "./models/workoutDbModel.js"; 
//const  WM1  =  "./models/workoutDbModel.js";  import app, { set } from '../app';
import "./app.css";

const url = 'https://api.github.com/users';  
const urlx = 'https://localhost:5173/api/workoutsx';
//const response = await fetch("https://api.github.com/users");

// second argument

function GetEntries() {
 console.log("in GetEntries, at start");
// const users = props.users; 
//function GetEntries(){   
  //const [workoutmodels, setWorkoutmodels] = useState([]);
  //const [aa, setAa] = useState(null);
  //const [bb, setBb] = useState(null);
  //const [users, setUsers] = useState(null);
  const [items, setItems] = useState(null);

  var v22;
  var v7;



async function doEntriesy(credentials) {
  return await fetch(urlx, 
  {   method: 'GET',
      headers: {
          'Content-Type': 'application/json',
       //   'Access-Control-Allow-Origin': 'true' // incorrect
      },
      body: JSON.stringify(credentials)
  })
      .then(data => data.json() )  // setItems(data);      
                        
      .then((data) => setItems(data)) //console.log(" data in doEntriesx = ",data) )                         
           
}








  const doEntriesx =  async () => 
  {console.log("in GetEntriesx,  pre fetch     ");
  //await fetch('http://localhost:5173/getWorkouts')
   await fetch('/api/getWorkouts')
         .then((response) => response.json())
         .then((data) => {setItems(data);
                         }
              )  
          .then(function (response){         
           console.log(" message message");           
                                   }            
               )                           
  }    //  end doEntriesx

  const doEntries =  async () => 
  {/////////   (in useEffect to async doEntries)   working  /////////////////////////////
console.log("in GetEntries,  pre fetch/axios ");
 await axios({method: 'GET',
              url: "/api/getWorkouts", 
              //url: "http://localhost:5173/getWorkouts", 
              //url: "https://jasnplaceholder.typicode.com/todos", 
              withCredentials: false,
              params: { _limit: 2 }, 
           //data: JSON.stringify(fetchOptions.data),
           //responseType: 'arraybuffer',
           //responseEncoding: 'binary',
           headers: {//'Content-Type': 'application/vnd.api+json',
                     // 'Content-Type': 'text/plain;charset=ISO-8859-15',
                     'Content-Type': 'application/vnd.api+json;text/plain;charset=ISO-8859-15',
                      Accept: 'application/vnd.api+json',
                    }
            //config: {params: {_limit: 2 }},        
                     
                  })              
          .then(function (response) {
           console.log("response.data = ",response.data);
           console.log("response.status = ",response.status);
           console.log("response.statusText = ",response.statusText);
           console.log("response.headers = ",response.headers);
           console.log("response.config = ",response.config);
           setItems(response.data); 
           //return response.data;
           });
           // .then( setItems(response.data)   //data => {setItems(data);           
           //           //    }                   
           //      );   
  /////////  end  (in useEffect to async doEntries)  working  /////////////////////////////                        
///////////////////////////////////////////////////////////////////////////

  }  // end  doEntries


  useEffect(() =>{ doEntriesy(); //doEntriesx();//doEntries();

//////////////////////////////////////////////////////////////////
////
//////////////////////////////////////////////////////////////////////////////
//               .then( items => 
//               {setUsers(items.data);
//                console.log(" in About items.data = ",items);
//               //console.log("ax.config = ",ax.config);    
//                 v22 = "catfish"; console.log(" in About,  .then items v22 = ",v22);
//                 //v6 = axios("http://localhost:5173/getUsers",[config]);
//                 console.log(" in About the items data = ",items.data); 
//                //  console.log("axStr =",axStr);               
//               //  //console.log("JSON = ".JSON.stringify(data, null, 4));
//               });                            

               //axios(url[, config])

              // document.head.innerHTML+=`
              // <meta name='description' content='My description value!!!'/>
              // <meta name='keywords' content='My keywords!!!'/>
              // `

/////////    (in useEffect)  working   /////////////////////////////////////////
//               fetch("http://localhost:5173/getUsers")
//                 .then(res => {
//                  return res.json();
//                     })
//                 .then(data =>  { //  console.log(" in GetEntries, data = ",data);
//                                  setItems(data);  // console.log(" in GetEntries, v7 = ",v7);
//                                }); 
 /////////  end   (in useEffect)  working   /////////////////////////////////////////              

  },[]  ); 



////  const doEntries =  () => {
////      axios.get("http://localhost:5173/getUsers")
////        .then(users => {setUsers(users.data);
////                    console.log(" in GetEntries, .then users = ",users.data);
////                    v2 = "catfish"; console.log(" in GetEntries, .then users v2 = ",v2);
////                   })
////        .then(console.log("GGGGGGGGGGGGGGGGG"))  
////        .then(console.log("HHHHHHHHHHHH"))         
////        .catch((err) => console.log(err)); 

   // const response = await axios.get("http://localhost:5173/getUsers");
   //       console.log(" response = ",response);
   //       console.log(" response.data = ",response.data);
   // v1=response.data;
   // v2=v1[1];
   // console.log(" v2 = ",v2); 
   // v5=v1[1].title;
   // console.log(" v5 = ",v5);  
   // setDd(v5.toString());
    //console.log(" dd = ",dd);   
    //console.log(" v1 = ",v1);   
    //setDd(v1);
    //console.log(" dd = ",dd);   
    //setCc(response.data);
    //console.log(" cc = ",cc);

    //console.log("inside getEntries, in useEffect, pre operation");
    //axios.get("http://localhost:5173/getUsers")
    //.then(console.log("in getUsers, useEffect, after axios.get"))
    //.then(workoutmodels => {setAa(workoutmodels.data);
    //                        console.log(" aa the first = ",aa);
    //                       setWorkoutmodels(workoutmodels.data);
    //                        console.log(" workoutmodels the first = ",workoutmodels);
    //                        setBb(workoutmodels);
    //                         console.log("bb = ",bb);
    //                           console.log("in getUsers, post operation, operation worked,  workoutmodels ",workoutmodels); 
    //                        console.log("in getUsers, post operation, operation worked,  and again workoutmodels.data ",workoutmodels.data); 
    //
    //                        return workoutmodels;
    //                       })
    //.then(data => {console.log("in get users, final .then data = ", data.data);
    //               setCc(data);
    //               console.log("cc = ",cc);
    //               setStr1("abcdef");
    //               console.log("in getEntries, in 3rd .then, xx = ",xx);
    //               console.log("in getEntries, n 3rd .then workoutmodels",workoutmodels);
    //              })  
    //.catch(err => console.log("in GetEntries, useEffect, catch err",err));

    //   <h4>inside return of GetEntries  title =  {users[2].title} bbbb</h4> 

  ////                               };

 //// useEffect(() =>{doEntries(); },[]  )  //      end useEffect
 //
 //setStr1("aaaassssssssddddddddfffffffff");
 // <h4>inside return of GetEntries   title =  {users[2].title} bbbb</h4> 
 //{ users && <h4>inside return of GetEntries   title =  {users[2].title} bbbb</h4>} 
    return(<><div>
           <h3>top line, inside return of GetEntries  cc</h3>
           { items && <h4>inside return of GetEntries  title =  {items[1].title}  bnnbbb</h4>}  
           <h3>middle line, inside return of  GetEntries above item list</h3>       

           <table>
             <thead>
               <tr>
                 {items && <th>title</th>}
                 {items && <th>reps</th>}
               </tr>
             </thead>
             <tbody>
              
               {items && items.map( item=>{
                return <tr key = {item._id}>
                         <td>{item.title}</td>
                         <td>{item.reps}</td>
                       </tr>
                                  })                           
               } 
              
             </tbody>
           </table> 



           <h3>bottom line, inside return of GetEntries below items list </h3>      
 </div></>);         
};
export default GetEntries;





