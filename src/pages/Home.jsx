import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'

export default function Home() {
  return (
    <>
      <h1>Home    No60 18:46 16/01/2024  with hydrate solution</h1>
      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
