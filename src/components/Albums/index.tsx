import { useContext } from 'react'
import { IArtists, IImage } from "../../app/Home/model";
import { AlbumContext } from "../../contexts/AlbumContext";
import { Artists, Button, Container, Content, Info } from "./styles";

import { Link } from 'react-router-dom';

interface Card {
  album: {
    id: string
    images: IImage[];
    name: string
    release_date: string
    total_tracks: number
    artists: IArtists[]
  }
}

export function AlbumCard({ album }: Card) {
  const { id, total_tracks, images, name, release_date, artists } = album

  const { getAlbum } = useContext(AlbumContext)

  return (
    <Container>
      <Content>
        <img src={images[2].url} />

        <Info>
          <div>
            <h3>{name}</h3>
            <Artists>
              {artists.map((artist) => {
                return (
                  <a key={artist.id} href={artist.uri}><span>{artist.name}</span></a>
                )
              })}
            </Artists>
            <span>tracks: {total_tracks}</span>
          </div>

          <div>
            <span>{new Date(release_date).toLocaleDateString()}</span>
            <Button>
              <Link to={`/tracks/${album.id}`} onClick={() => getAlbum(album)} >View</Link>
            </Button>
          </div>
        </Info>
      </Content>
    </Container>
  )
}