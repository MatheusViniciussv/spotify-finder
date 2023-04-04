import { createContext, useState, ReactNode } from 'react'
import { IArtists, IImage } from '../app/Home/model';

interface IAlbumTracks {
  id: string
  images: IImage[];
  name: string
  duration_ms: number;
  artists: IArtists[]
  uri: string
}

interface AlbumContextType {
  albumTracks: IAlbumTracks[];
  albumId: string
  getAlbumId: (id: string) => void
  handleAlbumTracks: (tracks: IAlbumTracks[]) => void
}

export const AlbumContext = createContext({} as AlbumContextType)

interface AlbumContextProviderProps {
  children: ReactNode
}

export function AlbumContexstProvider({
  children,
}: AlbumContextProviderProps) {
  const [albumId, setAlbumId] = useState<string>('');
  const [albumTracks, setAlbumTracks] = useState<IAlbumTracks[]>([])

  function getAlbumId(id: string) {
    setAlbumId(id)
  }

  function handleAlbumTracks(tracks: IAlbumTracks[]) {
    setAlbumTracks(tracks)
  }

  return (
    <AlbumContext.Provider
      value={{ albumId, albumTracks, getAlbumId, handleAlbumTracks }}
    >
      {children}
    </AlbumContext.Provider>
  )
}