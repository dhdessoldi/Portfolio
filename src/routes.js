import ScrollToTop from "components/ScrollToTop";
import BasePage from "pages/BasePage";
import Curriculum from "pages/Curriculum";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Portfolio from "pages/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
