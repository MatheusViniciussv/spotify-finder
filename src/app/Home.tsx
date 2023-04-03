import { useEffect } from 'react'
import { Container } from './styles'
import { FinderInput } from '../components/FinderInput'

import { api } from '../service/api'

export function Home() {

  // remaster % 20track: Doxy % 20artist: Miles % 20Davis

  useEffect(() => {
    const fetchData = async () => {
      const response = (await api.get('/?query=franksinatra&type=artist'))
      return response.data
    }

    console.log(api.defaults.headers.token)

    fetchData()
  }, [])

  return (
    <Container>
      <FinderInput />
    </Container>
  )
}