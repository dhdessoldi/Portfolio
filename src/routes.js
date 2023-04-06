import ScrollToTop from "components/ScrollToTop";
import BasePage from "pages/BasePage";
import Contact from "pages/Contact";
import Curriculum from "pages/Curriculum";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Portfolio from "pages/Portfolio";
import Post from "pages/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
          <Route path="/posts/:id/*" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
