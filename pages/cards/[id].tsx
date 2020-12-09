import {useRouter} from 'next/router'
import {gql, useQuery} from '@apollo/client'

const GetCardByIDQuery = gql`
  query GetCardById($cardID: MongoID!) {
    getCardById(_id: $cardID) {
      _id
      name
      cardType
      group
      race
    }
  }
`

export default function CardDetail() {
  const router = useRouter()
  const {data, loading, error} = useQuery(GetCardByIDQuery, {variables: {
    cardID: router.query.id
  }})
  if (loading) {
    return 'loading'
  }
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}
