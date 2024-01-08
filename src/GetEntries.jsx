

import React, { useState, useEffect } from 'react';
import "./app.css";

const url = 'https://api.github.com/users';  
//const response = await fetch("https://api.github.com/users");
//  import { WorkoutModelDb } from "./models/workoutDbModel.js";
// second argument

const GetEntries = () => {  
  const [users, setUsers] = useState([]);
  console.log("inside GetEntries xxx");
  const getUsers = async () => 
   {const response = await fetch(url);
   const users = await response.json();
   setUsers(users);
   console.log("inside GetEntries");
   //WorkoutModelDb.find().sort({createdAt: -1}) /* sort to go from newest to oldest */
    //console.log(users);
   }

  useEffect(() => {getUsers();},[]);
  /*
  return (
    <>
     <h3>github users</h3>    
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} className="strClass">profile</a>
              </div>
            </li>     
          );
        })}
      </ul>
    </>
  ); */
};
export default GetEntries;




