import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import { AboutMe } from './Pages/AboutMe'
import { Services } from './Pages/Services'
import { Resources } from './Pages/Resources'
import { WorkWithMe } from './Pages/WorkWithMe'
import { Home } from './Pages/Home'
import { NotFound } from './Pages/NotFound';
import { navigationData } from './constants/Navigation'


export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="services" element={<Services />} />
          <Route path="resorces" element={<Resources />} />
          <Route path="work-with-me" element={<WorkWithMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  )
}
