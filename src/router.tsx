import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/characters/:id" element={<Characters />} />
      <Route path="/episodes/:id" element={<Episodes />} />
    </Routes>
  );
}
