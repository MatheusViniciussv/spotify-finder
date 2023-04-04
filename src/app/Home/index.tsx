import { useEffect, useState } from 'react'
import { CardContainer, Container } from './styles'
import { FinderInput } from '../../components/FinderInput'

import { api } from '../../service/api'
import { IAlbum } from './model';
import { AlbumCard } from '../../components/Albums';

export function Home() {

  const [finderAlbum, setFinderAlbum] = useState<string>('');
  const [album, setAlbum] = useState<IAlbum | undefined>()

  useEffect(() => {

    if (finderAlbum) {
      const fetchData = async () => {
        const { data } = await api.get<IAlbum>(`/search?query=${finderAlbum}&type=album&limit=10`)
        setAlbum(data)

        return data
      }

      fetchData()
    }
  }, [finderAlbum])

  function findAlbumName(name: string) {
    setFinderAlbum(name)
  }


  return (
    <Container>
      <FinderInput handleAlbumName={findAlbumName} />

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