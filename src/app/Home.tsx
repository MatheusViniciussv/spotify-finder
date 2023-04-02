import { useEffect } from 'react'
import { Container } from './styles'
import { FinderInput } from '../components/FinderInput'

export function Home() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://api.spotify.com/v1/search/q=tyga;type=artist')

  //     return response.json()
  //   }


  //   fetchData()
  // }, [])


  return (
    <Container>
      <FinderInput />
    </Container>
  )
}