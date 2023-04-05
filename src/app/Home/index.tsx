import { useContext, useEffect, useState } from 'react'
import { CardContainer, Container } from './styles'
import { FinderInput } from '../../components/FinderInput'

import { api } from '../../service/api'
import { IAlbum } from './model';
import { AlbumCard } from '../../components/Albums';
import { AlbumContext } from '../../contexts/AlbumContext';

export function Home() {

  const { search } = useContext(AlbumContext)

  const [album, setAlbum] = useState<IAlbum | undefined>()

  const fetchData = async () => {
    const { data } = await api.get<IAlbum>(`/search?query=${search}&type=album&limit=10`)
    setAlbum(data)

    return data
  }

  useEffect(() => {
    if (search) {
      const searchAlbum = setTimeout(() => {
        fetchData()
      }, 800)

      return () => clearTimeout(searchAlbum)
    }
  }, [search])

  return (
    <Container>
      <FinderInput />

      <CardContainer>
        {album?.albums.items.map((album) => {
          return (
            <AlbumCard album={album} />
          )
        })}
      </CardContainer>
    </Container>
  )
}