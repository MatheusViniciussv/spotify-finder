import { Input } from "./styles";

interface InputProps {
  handleAlbumName: (name: string) => void
}

export function FinderInput({ handleAlbumName }: InputProps) {
  return (
    <Input placeholder='find your album' onChange={(e) => handleAlbumName(e.currentTarget.value)} />
  )
}