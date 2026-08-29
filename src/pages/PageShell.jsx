import LineArt from '../components/LineArt'
import { Link } from 'react-router-dom'
import { useI18n } from '../context/Language'

export default function PageShell({ title, lead, children }) {
  const { t, path } = useI18n()
  return (
    <main className="page" id="mainContent">
      <LineArt className="line-design" on />
      <nav className="crumbs" aria-label="breadcrumb">
        <Link to={path('/')}>{t.crumbs.home}</Link>
        <span>/</span>
        <span>{title}</span>
      </nav>
      <h1 className="page-title display">{title}</h1>
      {lead ? <p className="page-lead">{lead}</p> : null}
      {children}
    </main>
  )
}
