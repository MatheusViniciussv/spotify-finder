import { Route, Routes } from "react-router-dom";
import { Home } from "./app/Home";
import { AlbumTrack } from "./app/AlbumTracks";

export function Router() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<AlbumTrack />} path='/tracks' />
    </Routes>
  )
}