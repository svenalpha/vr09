
created with TNN mern stack video and ssr-react scaffold. ie connects to 
mongoDB and has a front end and backend. minimal css. No security 
ie no helmet/passport etc 
measures. 

started with a08/vr08
- then added TNN mern stack tutorial stuff:
- doesn't contain security measures 
 - patch route added

https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE
but videos saved in c:\web\00Videos_web
files saved at:  https://github.com/iamshaunjp/MERN-Stack-Tutorial


do: npm run dev   //  for development version     
do: npm run build  // for production version (ie creates dist directory)
difficulty with prev    NODE_ENV=production node server     iew of build version, at command prompt, so do:
  // which seemed to work correctly 



(almost) working model of multi-page SSR vite/express/react from: 

https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react

slightly changed with:
1) because of age of this demo project, all dependantcies in 
package.json updated with newest version 
2)  a bit of css added
3)another page "extra" added
4) UseEffectFetchData added 
5) the 404 solution not in effect



to make work:
in package.json
          "@vitejs/plugin-react": "workspace:*",
provoked  an error. It was changed to:
          "@vitejs/plugin-react": "^4.0.4",
 express and compression moved from devDependencies to dependencies
 "serve-static": "^1.15.0"  added as per original model above ie  ..tree/main/playground/ssr-react




https://stackoverflow.com/questions/45390377/react-how-to-pass-returned-data-from-an-exported-function-to-a-component



routes removed from server.js to workoutRoutes.js. POST & GET functions in turn are removed and replaced by functions
call functions in workoutController.js. Only 2 just for proof of concept. 


in App.jsx, Home is moved to first in menu, Error404 is moved to last and path                                      
changed to "*"  for catch-all

update system with popup window toggled with setDoUpdate useState hook  is 
passed from WorkoutDisplayDetails to UpdateWorkoutForm



the "error message" notice uses class name change to toggle highlight of 
missed entry fields. 

.module_StrClass inside css1.module.css file is used in About.jsx with
import {module_StrClass}  from "../css1.module.css";  // ie only 1 class is imported
....<h4 className={module_StrClass}>XYZ</h4>



/* conditional classes. see CreateWorkoutForm   input */
input.error{border: 1px solid var(--error); color:green;}


404 error message fixed: see react404reload.txt 




 


 "@vitejs/plugin-react": "^4.0.4",

MONGO_URI_FROM_ENV=mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/?retryWrites=true&w=majority
MONGO_URI_FROM_ENV=mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority  // working example
MONGO_URI_FROM_ENV=mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/?retryWrites=true&w=majority

latest connection string
MONGO_URI_FROM_ENV=mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/?retryWrites=true&w=majority

6j5pbHRxwLanqaq4   = new password instead 654321%40a
includes mongodb.net/cluster0 ??



///// code snippet from mongo db for connection from node //////////////////////   //     
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://userx:<password>@cluster0.t8319.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

/////////////  end code snippet /////////////






to do:
require('dotenv').config();  // as used in connect_mongo_render



import cors from 'cors';
app.use(cors());

//app.use(cors({
//  origin: "http://localhost:5173/api/workoutsx/",
//  headers: ["Content-Type"],
//  credentials: true,
//}));
//app.options('*',cors());

//app.use(cors());
//app.use(cors());







