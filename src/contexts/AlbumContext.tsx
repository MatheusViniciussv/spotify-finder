import { createContext, useState, ReactNode } from 'react'
import { IArtists, IImage, ItemsDTO } from '../app/Home/model';

interface IAlbumTracks {
  id: string
  images: IImage[];
  name: string
  duration_ms: number;
  artists: IArtists[]
  uri: string;
  preview_url: string;
  external_urls: {
    spotify: string
  }
}

interface IAlbum {
  id: string;
  name: string;
  images: IImage[];
}

interface AlbumContextType {
  search: string;
  albumTracks: IAlbumTracks[];
  album: IAlbum
  getAlbum: (album: IAlbum) => void
  handleAlbumTracks: (tracks: IAlbumTracks[]) => void
  handleSearch: (searchAlbum: string) => void
}

export const AlbumContext = createContext({} as AlbumContextType)

interface AlbumContextProviderProps {
  children: ReactNode
}

export function AlbumContexstProvider({
  children,
}: AlbumContextProviderProps) {
  const [album, setAlbum] = useState<IAlbum>({} as IAlbum);
  const [albumTracks, setAlbumTracks] = useState<IAlbumTracks[]>([])
  const [search, setSearch] = useState<string>('')

  function getAlbum(album: IAlbum) {
    setAlbum(album)
  }

  function handleAlbumTracks(tracks: IAlbumTracks[]) {
    setAlbumTracks(tracks)
  }

  function handleSearch(searchAlbum: string) {
    setSearch(searchAlbum)
  }

  return (
    <AlbumContext.Provider
      value={{ album, albumTracks, getAlbum, handleAlbumTracks, search, handleSearch }}
    >
      {children}
    </AlbumContext.Provider>
  )
}