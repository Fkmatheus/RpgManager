import { Routes, Route } from "react-router-dom";

import {Home} from "../pages/Home.tsx";
import {Test} from "../pages/Test.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}