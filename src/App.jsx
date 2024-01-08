import { Link, Route, Routes } from 'react-router-dom';
import {useEffect, useState} from "react";   






//import { BrowserRouter } from 'react-router-dom';
import "./app.css";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.jsx', { eager: true })

console.log("in app.jsx, import.meta.glob = ", import.meta.glob);
console.log("in app.jsx, pages = ", pages);

// original working routes
const rx = Object.keys(pages).map((path) => {                              
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]                      
  console.log("App.jsx, Object.keys(pages).map((path), name = ",name);      
  console.log("App.jsx, Object.keys(pages).map((path), path = ",path);      
  return {name,                                                              
          path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,         
          component: pages[path].default,                                
         }                                  }                             
                                 )                                          
                                                                
const pxx = import.meta.glob('./pages/Env.jsx', { eager: true })
const rxx = Object.keys(pxx).map((path) => {
  //const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1] 
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1] 
  console.log("in app.jsx, pages[path] = ",pages[path]);
  console.log("in app.jsx, pages[path].default = ",pages[path].default);
  if (name == "Env") {return {name: "doEnv",
                              path: "/doenv",
                              component: pages[path].default, 
                             }        
                     }//else                            
                     //{return                              
                     //}                            
                                             }                              
                                 )                  

const routes= rx.concat(rxx);
console.log("in app.jsx, after concat, routes = ",routes);


const index = routes.findIndex((route) => route.name == "Home");
const Home= routes[index];
routes.splice(index, 1); routes.splice(0,0,Home);

const index2 = routes.findIndex((route) => route.name == "Error404");
const Error404= routes[index2]; Error404.path="/*"; 
routes.splice(index2, 1); routes.push(Error404);
//   end original working routes


export function App() 
{
// hydrate error solution. see ReadMe.txt  vr08  ////////
const [Show, setShow] = useState(false);
useEffect(()=>{setShow(true)},[]);
if (!Show) {return null} 
/////   end  hydrate error solution. see ReadMe.txt  vr08  ////////                            

// original working routes
  return(<>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            /* console.log("in Routes ul name, path =",name, path); */
            console.log("in App.jsx routes. name = ",name);
            console.log("in App.jsx routes. path = ",path);
            if (name !== "Error404"&&name !== "xxxUpdate")  //&&name != "doEnv")     
             {return(
                <li key={path} style={{color: "red"}}>
                  <Link to={path}   style={{color: "green"}}>{name}</Link>
                </li>       
                    )
             }                            }                      
                     )                                                            
          }
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => 
          {console.log("app.jsx Routes path =",path);     
           console.log("App.js Routes RouteComp  =",RouteComp );
           return <Route key={path} path={path} element={<RouteComp />}></Route>
          }        )            
        }                 
      </Routes>
     </>)  




}    //   end   export function App() 


const doenv =  (req,res)=>{  
  /* console.log("inside workoutController.js  getEnv");  */ 
  /*const navigate = useNavigate;                      
  return(navigate("/Error404"))       
*/    res.json({mssg: "inside doEnv in workoutController.js 98"});     
     console.log("inside export doEnv");
                                }    

//route.get("/extra",doEnv); 

     

