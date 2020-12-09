import Link from 'next/link'
import {gql, useQuery} from '@apollo/client'

const CardsQuery = gql`
  query {
    cardPagination {
      count
      items {
        _id
        name
      }
      pageInfo {
        currentPage
        pageCount
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

export default function Index() {
  const {data, loading, error} = useQuery(CardsQuery)
  if (loading) return 'loading'
  const cards = data.cardPagination.items
  return <ul>
    {cards.map(item => <Link href={`/cards/${item._id}`}><li key={item._id}>{item.name}</li></Link>)}
  </ul>
}
