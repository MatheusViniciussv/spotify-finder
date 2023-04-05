import { AlbumContext } from "../../contexts/AlbumContext";
import { Input } from "./styles";
import { useContext } from 'react'

export function FinderInput() {
  const { search, handleSearch } = useContext(AlbumContext)

  return (
    <Input placeholder='find your album' value={search} onChange={(e) => handleSearch(e.target.value)} />
  )
}