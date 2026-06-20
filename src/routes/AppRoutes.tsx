import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home.tsx";
import { ArtObjects } from "../pages/ArtObjects.tsx";
import { Gems } from "../pages/Gems.tsx"
import { MagicItens } from "../pages/MagicItens.tsx";
import { Treasure } from "../pages/Treasure.tsx";
import { MagicSpells } from "../pages/magicSpells.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ObjetosDeArte" element={<ArtObjects />} />
      <Route path="/Gemas" element={<Gems />} />
      <Route path="/ItensMagicos" element={<MagicItens />} />
      <Route path="/Treasure" element={<Treasure />} />
      <Route path="/Spells" element={<MagicSpells />} />
    </Routes>
  );
}