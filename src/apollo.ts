import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client"

export const isLoggedInVar = makeVar(false)

// 设置apollo client uri是后端的地址
export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar()
            },
          },
        },
      },
    },
  }),
})
