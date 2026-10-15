import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/Language'
import Layout from './Layout'
import Home from './pages/Home'

const Program = lazy(() => import('./pages/Program'))
const Exhibit = lazy(() => import('./pages/Exhibit'))
const Visit = lazy(() => import('./pages/Visit'))
const Problems = lazy(() => import('./pages/Problems'))
const Venue = lazy(() => import('./pages/Venue'))
const Register = lazy(() => import('./pages/Register'))
const Secretariat = lazy(() => import('./pages/Secretariat'))
const Status = lazy(() => import('./pages/Status'))
const AdminApp = lazy(() => import('./pages/admin/AdminApp'))
const News = lazy(() => import('./pages/News'))

export default function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={null}>
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
            <Route path="secretariat" element={<Secretariat />} />
            <Route path="status" element={<Status />} />
            <Route path="status/:code" element={<Status />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<News />} />
            <Route path="en" element={<Home />} />
            <Route path="en/program" element={<Program />} />
            <Route path="en/exhibit" element={<Exhibit />} />
            <Route path="en/visit" element={<Visit />} />
            <Route path="en/problems" element={<Problems />} />
            <Route path="en/venue" element={<Venue />} />
            <Route path="en/register" element={<Register />} />
            <Route path="en/secretariat" element={<Secretariat />} />
            <Route path="en/status" element={<Status />} />
            <Route path="en/status/:code" element={<Status />} />
            <Route path="en/news" element={<News />} />
            <Route path="en/news/:id" element={<News />} />
          </Route>
        </Routes>
      </Suspense>
    </LanguageProvider>
  )
}
