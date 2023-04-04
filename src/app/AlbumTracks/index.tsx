import { useEffect, useContext } from "react"
import { AlbumTracks } from "../Home/model"
import { api } from "../../service/api"
import { AlbumContext } from "../../contexts/AlbumContext"

export function AlbumTrack() {
  const { albumId, handleAlbumTracks, albumTracks } = useContext(AlbumContext)

  useEffect(() => {
    if (albumTracks) {
      const fetchData = async () => {
        const { data } = await api.get<AlbumTracks>(`/albums/${albumId}/tracks`)
        handleAlbumTracks(data.items)

        return data
      }

      fetchData()
    }
  }, [albumId])

  return (
    <>
      {albumTracks.map(track => {
        return (
          <h1>{track.name}</h1>
        )
      })}
    </>
  )
}