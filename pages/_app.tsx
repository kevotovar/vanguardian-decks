import { ApolloProvider } from '@apollo/client'

import Container from '../components/layout/Container'
import { useApollo } from '../lib/apolloClient'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ApolloProvider>
  )
}
