import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CreateAccount from "../pages/create-account"
import Login from "../pages/login"

function LoggedOutRouter() {
  // const onClick = () => {
  //   isLoggedInVar(true)
  // }
  return (
    <Router>
      {/* v6版本的react-router-dom的switch变成了routes 写法上不一样了 */}
      <Routes>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default LoggedOutRouter
