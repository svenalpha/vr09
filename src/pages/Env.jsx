export default function Env() {
  let msg = 'default message here in Env post  removed Navigate no9 16:55'
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg
  } catch {}
  return <h1>{msg}</h1>
}

