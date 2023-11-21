import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'

export default function Home() {
  return (
    <>
      <h1>Home    No26 19:33 21/11/2023 </h1>
      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
