import { Link, Route, Routes } from 'react-router-dom'
import "./app.css";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.jsx', { eager: true })

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]
  return {name,                                          
          path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,            
          component: pages[path].default,                  
         }                                      }
                            
                                     ) 

//const index = routes.findIndex((route) => route.name == "Home");
//const Home= routes[index];
//routes.splice(index, 1); routes.splice(0,0,Home);

//const index2 = routes.findIndex((route) => route.name == "Error404");
//const Error404= routes[index2]; Error404.path="/*"; 
//routes.splice(index2, 1); routes.push(Error404);

export function App() {
  return(<>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            /* console.log("in Routes ul name, path =",name, path); */
            if (name !== "Error404"&&name !== "xxxUpdate")     
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
          {console.log("path =",path);
          console.log("element =",RouteComp );
            return <Route key={path} path={path} element={<RouteComp />}></Route>
          }        )            
        }                 
      </Routes>
     </>)  
}
