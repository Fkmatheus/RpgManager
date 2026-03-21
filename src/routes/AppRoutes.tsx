import { Routes, Route } from "react-router-dom";

import {Home} from "../pages/Home.tsx";
import { ArtObjects } from "../pages/ArtObjects.tsx";
import { Gems } from "../pages/Gems.tsx"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ObjetosDeArte" element={<ArtObjects />} />
      <Route path="/Gemas" element={<Gems />} />
    </Routes>
  );
}