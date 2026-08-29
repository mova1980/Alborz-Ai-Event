import { Link } from 'react-router-dom'

export default function DiamondButton({ to, href, onClick, children, type = 'button' }) {
  const inner = <span>{children}</span>
  return (
    <div className="linktext">
      {to ? (
        <Link to={to}>{inner}</Link>
      ) : href ? (
        <a href={href}>{inner}</a>
      ) : (
        <button type={type} onClick={onClick}>{inner}</button>
      )}
    </div>
  )
}
