import { Routes, Route } from "react-router-dom";

import {Home} from "../pages/Home.tsx";
import { ArtObjects } from "../pages/ArtObjects.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ObjetosDeArte" element={<ArtObjects />} />
    </Routes>
  );
}