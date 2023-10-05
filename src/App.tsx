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
        <Navigation />
        <Routes>
          <Route path={navigationData[0].link} index element={<Home />} />
          <Route path={navigationData[1].link} element={<AboutMe />} />
          <Route path={navigationData[2].link} element={<Services />} />
          <Route path={navigationData[3].link} element={<Resources />} />
          <Route path={navigationData[4].link} element={<WorkWithMe />} />
          <Route path={navigationData[5].link} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
