import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/Language'
import Layout from './Layout'
import Home from './pages/Home'
import Program from './pages/Program'
import Exhibit from './pages/Exhibit'
import Visit from './pages/Visit'
import Problems from './pages/Problems'
import Venue from './pages/Venue'
import Register from './pages/Register'
import Status from './pages/Status'
import AdminApp from './pages/admin/AdminApp'

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="admin/*" element={<AdminApp />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="program" element={<Program />} />
          <Route path="exhibit" element={<Exhibit />} />
          <Route path="visit" element={<Visit />} />
          <Route path="problems" element={<Problems />} />
          <Route path="venue" element={<Venue />} />
          <Route path="register" element={<Register />} />
          <Route path="status" element={<Status />} />
          <Route path="status/:code" element={<Status />} />
          <Route path="en" element={<Home />} />
          <Route path="en/program" element={<Program />} />
          <Route path="en/exhibit" element={<Exhibit />} />
          <Route path="en/visit" element={<Visit />} />
          <Route path="en/problems" element={<Problems />} />
          <Route path="en/venue" element={<Venue />} />
          <Route path="en/register" element={<Register />} />
          <Route path="en/status" element={<Status />} />
          <Route path="en/status/:code" element={<Status />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}
