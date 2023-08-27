import express from 'express';
import mongoose from 'mongoose';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url'



import WorkoutModelDb from "./src/models/workoutDbModel.js";
import { router } from "./src/routes/workoutRoutes.js";

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

const app = express()

  // middleware
app.use((req,res,next)=>{console.log("req.path =",req.path);   
                         console.log("req.method =",req.method);
                         next();   
                        }                      
       );                               
app.use(express.json());
app.use("/api/workout",router);  /* app.use("/src/routes/workout", router);??? */
       
 
//  app.listen(process.env.PORT || 3333); alternative below as part of logging in to mongoose
//  in password:654321@a ; may need to escape @ with %40     
const dbURI='mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority';                                                                                                                       
mongoose.connect(dbURI, {UseNewUrlParser: true,UseUnifiedTopology:true})                                                                                                                                       
 .then((result)=>{app.listen(process.env.PORT || 3333); //ie localhost:3333   // 5731 ???
                  console.log("connected to daaaata base");
                 })
 .catch((err)=>console.log(err));






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

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(5173, () => {
      console.log('http://localhost:5173')
    }),
  )
}
