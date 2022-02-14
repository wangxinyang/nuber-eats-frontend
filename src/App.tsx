import React from "react"
import { useReactiveVar } from "@apollo/client"
import { isLoggedInVar } from "./apollo"
import LoggedInRouter from "./routers/logged-in-router"
import LoggedOutRouter from "./routers/logged-out-router"

// query isLoggedIn写不写都没有关系
// @client表明是从local查询
// 老式写法 现在使用reactive variable
// const IS_LOGGED_IN = gql`
//   query isLoggedIn {
//     isLoggedIn @client
//   }
// `

function App() {
  // const { data } = useQuery(IS_LOGGED_IN)
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />
}

export default App
