import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe/index";
import { Services } from "./pages/Services";
import { Resources } from "./pages/Resources";
import { WorkWithMe } from "./pages/WorkWithMe";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { navigationData } from "./constants/Navigation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./App.css";
import "./styles/index.scss";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={navigationData[0].link} index element={<Home />} />
          <Route path={navigationData[1].link} element={<AboutMe />} />
          <Route path={navigationData[2].link} element={<Services />} />
          <Route path={navigationData[3].link} element={<Resources />} />
          <Route path={navigationData[4].link} element={<WorkWithMe />} />
          <Route path={navigationData[5].link} element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
