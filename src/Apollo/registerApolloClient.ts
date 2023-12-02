import { createHttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { setContext } from '@apollo/client/link/context';
import  { ApolloNextAppProvider} from "@apollo/experimental-nextjs-app-support/ssr";
const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
  fetchOptions: { cache: "no-store" },
});
const authLink = setContext((_, { headers }) => {
  let token;  
  if (typeof window !== 'undefined') {
    localStorage.getItem('authToken');
  }
  return {  
    headers: {
      ...headers,
      Authorization: token ? token : "",
    }
  }
});
export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
