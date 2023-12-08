import express from 'express';
import mongoose from 'mongoose';
import fs from 'node:fs';
import path from 'node:path';
import cors from 'cors';

import { fileURLToPath } from 'node:url'

//const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion } from 'mongodb';

import WorkoutModelDb from "./src/models/workoutDbModel.js";
import { router } from "./src/routes/workoutRoutes.js";
import "dotenv/config";



//////////// cors solution attempt 1     /////////////////////////
//const httpOptions = {headers: new HttpHeaders({'Access-Control-Allow-Origin':'*',
//                                                'Authorization': 'authkey',
//                                                'userid': '1'      
//                                              })      
//                    };                                
////////////// end  cors solution attempt 1     ///////////////               
                    
//const mongoose =require("mongoose");
//const Blag = require("./models/blogModel");


const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isTest = process.env.VITEST

/*  ViteExpress.config({ mode: "production" })  */


process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop'

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort,
) {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : ''

const app = express();   

app.use(cors());
//app.use(cors());
//app.use(cors({origin:"https://vr09.onrender.com",
//              headers: ["Content-Type"],       
//              credentials: true,
//             }));
//app.options('*',cors());             

  // middleware
app.use((req,res,next)=>{console.log("req.path =",req.path);   
                         console.log("req.method =",req.method);
                         next();   
                        }                      
       );                               
app.use(express.json());
app.use((req,res,next)=>{//console.log("in server.js, testing middleware  req.path =",req.path);   
  //console.log("req.method =",req.method);
  next();   
 }                                       
);  
app.use("/api/workout",router);  /* app.use("/src/routes/workout", router);??? */

/*BB
var enableCORS=function (req,res,next){
                                res.header("Access-Control-Allow-Origin","*");
                                res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT,DELETE");
                                res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
                               if ('OPTIONS' == req.method) {res.send(200);}
                                                       else {next();};
                               };
 app.configure(function(){app.use(enableCORS);});    
 BB*/
 
//  app.listen(process.env.PORT || 3333); alternative below as part of logging in to mongoose
//  in password:654321@a ; may need to escape @ with %40  

//login string passed to .env   
//const dbURI='mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority';                                                                                                                       
//let api_key = process.env["MONGO_URI_FROM_ENV"];
//mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})                                                                                                                                       
// .then((result)=>{app.listen(process.env.PORT || 3334); //  3333/3334 ie localhost:3333   // 5731 ???
//                  console.log("connected to daaaata base");
//                 })
// .catch((err)=>console.log(err));






  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    })
    // use vite's connect instance as middleware
    app.use(vite.middlewares)
  } else {
    app.use((await import('compression')).default())
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      }),
    )
  }

  
// routes would be here, but moved to routes/workoutRoutes


  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
      } else {
        template = indexProd
        // @ts-ignore
        render = (await import('./dist/server/entry-server.js')).render
      }

      const context = {}
      const appHtml = render(url, context)

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, context.url)
      }

      const html = template.replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }   
  })

  return { app, vite }
}




//  app.listen(process.env.PORT || 3333); alternative below as part of logging in to mongoose
//  in password:654321@a ; may need to escape @ with %40  
// login string passed to .env   const dbURI='mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority';                                                                                                                       
let api_key = process.env['MONGO_URI_FROM_ENV'];
 //api_key = "asdfghjkl";
//const uri = "mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority";
//  works    mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority

//    below working version  except for deployment //////////////////////////////////
if (!isTest)
  {
 mongoose.connect(uri, {UseNewUrlParser: true,UseUnifiedTopology:true})
.then(createServer().then(({ app }) =>//{app.listen(5173); //ie localhost:3333/3334   // 5173        
                                      // console.log("with (!isTest) connected to daaaata base");
                                      //}                                                                            
                                      app.listen((process.env.PORT || 5173), () => {
                                      console.log('http://localhost:5173 with (!isTest) connected to daaaata base process.env.PORT =  ',process.env.PORT)
                                      }),
                         )
     )                                                                      
 .catch((err)=>console.log("mongoose connect error: ",err));
  }
///  end  below working version  except for deployment //////////////////////////////////








/*AA

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

if (!isTest) {run_connect2();}

async function run_connect2() {                        
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
                                           
run_connect2().catch(console.dir);         
                              }       


  
function run_connect(){  
mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})
.then(createServer().then(({ app }) =>//{app.listen(5173); //ie localhost:3333/3334   // 5173        
                                      // console.log("with (!isTest) connected to daaaata base");
                                      //}                                                                            
                                      app.listen((process.env.PORT || 5173), () => {
                                      console.log('http://localhost:5173 with (!isTest) connected to 3daaaata base process.env.PORT ',process.env.PORT)
                                      }),                    
                         )                         
     )                                                                      
 .catch((err)=>console.log("mongoose connnnect error: ",err));
                            }                                                                                                                                      
AA*/                                   
                                                            
                                                     
//    below working version  except for deployment //////////////////////////////////
//if (!isTest)
//  {
// mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})
//.then(createServer().then(({ app }) =>//{app.listen(5173); //ie localhost:3333/3334   // 5173        
//                                      // console.log("with (!isTest) connected to daaaata base");
//                                      //}                                                                            
//                                      app.listen((process.env.PORT || 5173), () => {
//                                      console.log('http://localhost:5173 with (!isTest) connected to daaaata base process.env.PORT ',process.env.PORT)
//                                      }),
//                         )
//     )                                                                      
// .catch((err)=>console.log("mongoose connect error: ",err));
//  }
 ///  end  below working version  except for deployment //////////////////////////////////



//  else    //  ie (isTest)
//  {mongoose.connect(api_key, {UseNewUrlParser: true,UseUnifiedTopology:true})                                                                                                                                       
//    .then((result)=>{app.listen(process.env.PORT || 3334); //ie localhost:3333/3334   // 5173        
//                     console.log("connected to daaaata base");
//                    })
//    .catch((err)=>console.log(err));
//  }  // end   if (!isTest)
//


//if (!isTest) {
//  createServer().then(({ app }) =>
//    app.listen(5173, () => {
//      console.log('http://localhost:5173')
//    }),
//  )
//}
