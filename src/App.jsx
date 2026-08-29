import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/Language'
import Layout from './Layout'
import Home from './pages/Home'
import Program from './pages/Program'
import Exhibit from './pages/Exhibit'
import Visit from './pages/Visit'
import Problems from './pages/Problems'
import Venue from './pages/Venue'

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="program" element={<Program />} />
          <Route path="exhibit" element={<Exhibit />} />
          <Route path="visit" element={<Visit />} />
          <Route path="problems" element={<Problems />} />
          <Route path="venue" element={<Venue />} />
          <Route path="en" element={<Home />} />
          <Route path="en/program" element={<Program />} />
          <Route path="en/exhibit" element={<Exhibit />} />
          <Route path="en/visit" element={<Visit />} />
          <Route path="en/problems" element={<Problems />} />
          <Route path="en/venue" element={<Venue />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}
