import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useState, useEffect, createContext, useReducer, useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
function multiply(a, b) {
  return a * b;
}
function multiplyAndAdd(a, b, c) {
  return add(multiply(a, b), c);
}
function add(a, b) {
  return a + b;
}
function addAndMultiply(a, b, c) {
  return multiply(add(a, b), c);
}
const app = "";
const module_StrClass = "_module_StrClass_38ixv_9";
const module_StrClass1 = "_module_StrClass1_38ixv_13";
const module_StrClass2 = "_module_StrClass2_38ixv_17";
const css1_module = {
  module_StrClass,
  module_StrClass1,
  module_StrClass2
};
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx("h4", { className: "strClass", children: "using strClass from   app.css  inside About pagee" }),
    /* @__PURE__ */ jsx("h4", { className: module_StrClass, children: "using module_StrClass within curly brackets  inside About pagee" }),
    /* @__PURE__ */ jsx("h4", { className: module_StrClass1, children: "using module_StrClass1 hhhhhhhhhh  inside About pagee" }),
    /* @__PURE__ */ jsx("h4", { className: module_StrClass2, children: "using module_StrClass1 hhhhhhhhhh  inside About pagee" }),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Env() {
  let msg = "default message here in Env post removed Navigate no6 13:08";
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg;
  } catch {
  }
  return /* @__PURE__ */ jsx("h1", { children: msg });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Env
}, Symbol.toStringTag, { value: "Module" }));
function Error404$1() {
  let msg = "default message inside Error404";
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg;
  } catch {
  }
  return /* @__PURE__ */ jsx("h1", { children: msg });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Error404$1
}, Symbol.toStringTag, { value: "Module" }));
const url$1 = "https://api.github.com/users";
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url$1);
    const users2 = await response.json();
    setUsers(users2);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h3", { children: "github users" }),
    /* @__PURE__ */ jsx("ul", { className: "users", children: users.map((user) => {
      const { id, login, avatar_url, html_url } = user;
      return /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("img", { src: avatar_url, alt: login }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { children: login }),
          /* @__PURE__ */ jsx("a", { href: html_url, className: "strClass", children: "profile" })
        ] })
      ] }, id);
    }) })
  ] });
};
function Extra() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Extra" }),
    /* @__PURE__ */ jsx(UseEffectFetchData, {}),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Extra
}, Symbol.toStringTag, { value: "Module" }));
const WorkoutsContext = createContext();
const workoutsReducer = (state, action) => {
  console.log("WorkoutContext, state = ", state);
  console.log("WorkoutContext, action = ", action);
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return { workouts: state.workouts.filter((w) => w._id !== action.payload._id) };
    case "UPDATE_WORKOUT":
      return { workouts: [...state.workouts] };
    default:
      return state;
  }
};
const WorkoutsContextProvider = ({ children }) => {
  console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider pre useReducer(workoutsReducer,{workouts: null })");
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });
  console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider post useReducer(workoutsReducer,{workouts: null })");
  return /* @__PURE__ */ jsx(WorkoutsContext.Provider, { value: { ...state, dispatch }, children });
};
const useWorkoutsContext = () => {
  console.log("in hooks/useWorkoutsContext.jsx/useWorkoutsContext   pre useContext(");
  const context = useContext(WorkoutsContext);
  console.log("in hooks/useWorkoutsContext.jsx/useWorkoutsContext post useContext(");
  if (!context) {
    throw Error("aaa use context only in designated components");
  }
  return context;
};
const url = "api/workout";
function GetWorkouts() {
  console.log("in GetWorkouts  pre useWorkoutsContext");
  const { workouts, dispatch } = useWorkoutsContext();
  console.log("in GetWorkouts  workouts = ", workouts);
  console.log("in GetWorkouts  post useWorkoutsContext");
  useEffect(() => {
    getAllWorkouts();
  }, []);
  const getAllWorkouts = async () => {
    console.log("in GetWorkouts/getAllWorkouts first line");
    console.log("url = ", url);
    const response = await fetch(url);
    const json = await response.json();
    console.log("in getAllWorkouts, response = ", response);
    console.log("in getAllWorkouts, json = ", json);
    if (response.ok) {
      console.log("in GetWorkouts, before dispatch is invoked. json =", json);
      dispatch({ type: "SET_WORKOUTS", payload: json });
      console.log("in getAllWorkouts, workouts = ", workouts);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "GetWorkouts" }),
    /* @__PURE__ */ jsx("h4", { children: "iiiiiiiinside GetWorkouts" }),
    /* @__PURE__ */ jsxs("div", { className: "workouts", children: [
      /* @__PURE__ */ jsx("h4", { children: "beginning inside GetWorkouts.jsx" }),
      workouts && workouts.map(
        (workout) => (
          // ie only fires if workouts is positive 
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: workout.title }) }, workout._id)
        )
      ),
      /* @__PURE__ */ jsx("h4", { children: "ending inside GetWorkouts.jsx" })
    ] }),
    "   ",
    /* @__PURE__ */ jsxs("div", { className: "workouts", children: [
      /* @__PURE__ */ jsx("h4", { children: "beginning loop to GetWorkouts/WorkoutDisplyDetails" }),
      /* @__PURE__ */ jsx("h4", { children: "end loop to GetWorkouts/WorkoutDisplyDetails" })
    ] }),
    "   "
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GetWorkouts
}, Symbol.toStringTag, { value: "Module" }));
function Home$1() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Home" }),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home$1
}, Symbol.toStringTag, { value: "Module" }));
const pages = /* @__PURE__ */ Object.assign({ "./pages/About.jsx": __vite_glob_0_0, "./pages/Env.jsx": __vite_glob_0_1, "./pages/Error404.jsx": __vite_glob_0_2, "./pages/Extra.jsx": __vite_glob_0_3, "./pages/GetWorkouts.jsx": __vite_glob_0_4, "./pages/Home.jsx": __vite_glob_0_5 });
const routes = Object.keys(pages).map(
  (path) => {
    const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
    return {
      name,
      path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
      component: pages[path].default
    };
  }
);
const index = routes.findIndex((route) => route.name == "Home");
const Home = routes[index];
routes.splice(index, 1);
routes.splice(0, 0, Home);
const index2 = routes.findIndex((route) => route.name == "Error404");
const Error404 = routes[index2];
Error404.path = "/*";
routes.splice(index2, 1);
routes.push(Error404);
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: routes.map(
      ({ name, path }) => {
        if (name !== "Error404" && name !== "xxxUpdate") {
          return /* @__PURE__ */ jsx("li", { style: { color: "red" }, children: /* @__PURE__ */ jsx(Link, { to: path, style: { color: "green" }, children: name }) }, path);
        }
      }
    ) }) }),
    /* @__PURE__ */ jsx(Routes, { children: routes.map(({ path, component: RouteComp }) => {
      console.log("path =", path);
      console.log("element =", RouteComp);
      return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(RouteComp, {}) }, path);
    }) })
  ] });
}
function render(url2, context) {
  console.log("in entry-server.jsx, url/location = ", url2);
  console.log("in entry-server.jsx, context =", context);
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url2, context, children: /* @__PURE__ */ jsx(WorkoutsContextProvider, { children: /* @__PURE__ */ jsx(App, {}) }) })
  );
}
export {
  render
};
