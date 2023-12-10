import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import React from "react";
import NotFound from "./pages/NotFound";
import Locations from "./pages/Locations";

export default function AppRoutes() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/characters/:id" element={<Characters />} />
      <Route path="/episodes/:id" element={<Episodes />} />
      <Route path="/locations/:id" element={<Locations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
