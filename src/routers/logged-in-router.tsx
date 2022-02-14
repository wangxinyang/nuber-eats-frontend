import React from "react"
import { isLoggedInVar } from "../apollo"

const LoggedInRouter = () => {
  return (
    <div>
      <h1>Logged In</h1>
      <button onClick={() => isLoggedInVar(false)}>Logout</button>
    </div>
  )
}

export default LoggedInRouter
