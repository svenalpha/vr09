import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import "../app.css";
import {module_StrClass,
        module_StrClass1,module_StrClass2}  from "../css1.module.css";




export default function About() {
  return (
    <>
      <h1>About</h1>
      <h4 className="strClass">using strClass from   app.css  inside About pagee</h4>  
      <h4 className={module_StrClass}>using module_StrClass within curly brackets  inside About pagee</h4>
      <h4 className={module_StrClass1}>using module_StrClass1 hhhhhhhhhh  inside About pagee</h4>
      <h4 className={module_StrClass2}>using module_StrClass1 hhhhzxchhhh  inside About pagee</h4>

      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
