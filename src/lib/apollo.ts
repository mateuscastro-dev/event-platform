import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPH_CMS_URI,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GRAPH_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
