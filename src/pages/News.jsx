import { Link, useParams } from 'react-router-dom'
import PageShell from './PageShell'
import { useI18n } from '../context/Language'

export function newsId(item, i) {
  return String(item?.id || '').trim() || `n${i + 1}`
}

export function newsList(t) {
  return Array.isArray(t.headlines?.items) ? t.headlines.items : []
}

function paras(body) {
  return String(body || '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
}

function HeadlineCard({ item, i, to, n2 }) {
  return (
    <Link className="headline-card" to={to}>
      <span className="hc-corners" aria-hidden="true" />
      {item.image ? (
        <span className="hc-media">
          <img src={item.image} alt="" loading="lazy" decoding="async" />
        </span>
      ) : null}
      <span className="hc-index">{n2(i + 1)}</span>
      <div className="hc-body">
        <div className="itemdate"><span>{item.date}</span></div>
        <div className="htitle">{item.title}</div>
      </div>
      <span className="hc-go" aria-hidden="true" />
    </Link>
  )
}

export function NewsGrid({ items, start = 0, limit }) {
  const { path, n2 } = useI18n()
  const list = limit != null ? items.slice(0, limit) : items
  return (
    <ul>
      {list.map((it, i) => {
        const idx = start + i
        const id = newsId(it, idx)
        return (
          <li key={id} style={{ '--stagger': i }}>
            <HeadlineCard item={it} i={idx} n2={n2} to={path(`/news/${id}`)} />
          </li>
        )
      })}
    </ul>
  )
}

export default function News() {
  const { id } = useParams()
  const { t, path } = useI18n()
  const items = newsList(t)
  const h = t.headlines

  if (!id) {
    return (
      <PageShell title={h.title} lead={h.kicker}>
        {items.length ? (
          <section className="headlines is-on news-archive">
            <NewsGrid items={items} />
          </section>
        ) : (
          <p className="lead">{h.empty}</p>
        )}
      </PageShell>
    )
  }

  const idx = items.findIndex((it, i) => newsId(it, i) === id)
  const item = idx >= 0 ? items[idx] : null
  if (!item) {
    return (
      <PageShell title={h.title} lead={h.empty}>
        <p className="lead">
          <Link className="text-link" to={path('/news')}>{h.back}</Link>
        </p>
      </PageShell>
    )
  }

  const others = items.filter((_, i) => i !== idx).slice(0, 3)

  return (
    <PageShell title={item.title} lead={item.date}>
      {item.image ? (
        <figure className="news-hero">
          <span className="news-hero-corners" aria-hidden="true" />
          <img src={item.image} alt="" decoding="async" />
        </figure>
      ) : null}
      <div className="news-body">
        {paras(item.body).map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
      </div>
      {others.length ? (
        <section className="headlines is-on news-more">
          <div className="kicker">{h.title}</div>
          <NewsGrid items={others} />
        </section>
      ) : null}
      <p className="lead" style={{ marginTop: 28 }}>
        <Link className="text-link" to={path('/news')}>{h.back}</Link>
      </p>
    </PageShell>
  )
}
