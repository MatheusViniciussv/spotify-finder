import { useEffect, useContext } from "react"
import { AlbumTracks } from "../Home/model"
import { api } from "../../service/api"
import { AlbumContext } from "../../contexts/AlbumContext"
import { AlbumContent, Container, TrackContainer, TrackContent, TrackInfo } from "./styles"
import { useParams } from "react-router-dom"
import { Spin } from "../../components/Loader"

export function AlbumTrack() {
  const { album, handleAlbumTracks, albumTracks, getAlbum } = useContext(AlbumContext)

  const { id } = useParams()

  const fetchAlbumTracks = async () => {
    const { data } = await api.get<AlbumTracks>(`/albums/${album.id}/tracks`)
    handleAlbumTracks(data.items)
  }

  const fetchAlbum = async () => {
    const { data } = await api.get(`/albums/${id}`)
    getAlbum(data)
  }

  async function getData() {
    if (!album.id) await fetchAlbum()

    await fetchAlbumTracks()
  }

  useEffect(() => {
    getData()
  }, [album])

  function convertMsinMinutes(ms: number) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <>
      {(!album.id || !album.images || !album.name) ? (
        <Spin />
      )

        : (
          <>
            <Container>
              <AlbumContent>
                <img src={album.images[1]?.url} alt="" />

                <h3>{album.name}</h3>
              </AlbumContent>

              <TrackContainer>
                {albumTracks.map(track => {
                  return (
                    <TrackContent key={track.id}>

                      <a href={track.external_urls.spotify}>
                        <img src={album.images[2]?.url} alt="" />
                      </a>


                      <TrackInfo>
                        <div>
                          <h3>{track?.name}</h3>
                          {track.artists.map(artist => {
                            return (
                              <a key={artist.id} href={artist.external_urls.spotify}>
                                <span>{artist.name}</span>
                              </a>
                            )
                          })}
                        </div>

                        <span>{convertMsinMinutes(track.duration_ms)}</span>
                      </TrackInfo>

                    </TrackContent>
                  )
                })}
              </TrackContainer>
            </Container>
          </>
        )
      }
    </>
  )
}