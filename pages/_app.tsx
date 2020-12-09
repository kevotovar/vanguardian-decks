
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

import '../styles/global.css'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
