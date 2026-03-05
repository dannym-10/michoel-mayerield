import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe/index";
import { WhereWeCanMeet } from "./pages/WhereWeCanMeet";
import { NextSteps } from "./pages/NextSteps";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { navigationData } from "./constants/Navigation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="app__main">
          <Routes>
            <Route path={navigationData[0].link} index element={<Home />} />
            <Route path={navigationData[1].link} element={<AboutMe />} />
            <Route path={navigationData[2].link} element={<WhereWeCanMeet />} />
            <Route path={navigationData[3].link} element={<NextSteps />} />
            <Route path={navigationData[4].link} element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
