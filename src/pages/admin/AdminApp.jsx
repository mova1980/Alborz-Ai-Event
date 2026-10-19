import { useEffect, useRef, useState } from 'react'
import '../../styles/admin.css'
import { Link, NavLink, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import ContentStudio from './ContentStudio'
import { api, errorText, getToken, setToken } from '../../lib/api'
import TicketPreview from '../../components/TicketPreview'

const STATUSES = ['submitted', 'reviewing', 'approved', 'waitlist', 'rejected', 'checked_in']
const ST_FA = {
  submitted: 'ثبت‌شده',
  reviewing: 'در بررسی',
  approved: 'تأیید',
  waitlist: 'لیست انتظار',
  rejected: 'رد',
  checked_in: 'ورود به میدان',
  new: 'جدید',
  read: 'خوانده',
  done: 'انجام',
}

function useAdmin() {
  const [me, setMe] = useState(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let stop = false
    ;(async () => {
      if (!getToken('admin')) {
        setReady(true)
        return
      }
      try {
        const out = await api('/me', { admin: true })
        if (!stop) setMe(out.role === 'admin' || out.role === 'supervisor' ? out : null)
      } catch {
        setToken('', 'admin')
      } finally {
        if (!stop) setReady(true)
      }
    })()
    return () => { stop = true }
  }, [])
  return { me, ready, setMe }
}

function Login({ onOk }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    setErr('')
    try {
      const out = await api('/login', { method: 'POST', body: { user, pass } })
      setToken(out.token, 'admin')
      onOk({ role: out.role, user: out.user })
    } catch (ex) {
      setErr(errorText(ex, 'ورود ناموفق بود.'))
    } finally {
      setBusy(false)
    }
  }
  return (
    <div className="ad-login">
      <form className="ad-card" onSubmit={submit}>
        <div className="ad-mark" />
        <h1>پنل مدیریت Digitex</h1>
        <p>هفته تکنولوژی البرز ۱۴۰۵</p>
        {err ? <div className="form-error">{err}</div> : null}
        <label>نام کاربری<input value={user} onChange={(e) => setUser(e.target.value)} autoComplete="username" /></label>
        <label>گذرواژه<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" /></label>
        <button className="ad-btn" type="submit" disabled={busy}>{busy ? '…' : 'ورود'}</button>
      </form>
    </div>
  )
}

function Shell({ me, onOut, children }) {
  const nav = [
    ['/admin', 'نمای کلی', false],
    ['/admin/gate', 'ورود / گیت', false],
    ['/admin/content', 'محتوای سایت', true],
    ['/admin/media', 'تصاویر و لوگو', true],
    ['/admin/registrations', 'ثبت‌نام‌ها', false],
    ['/admin/secretariat', 'دبیرخانه', false],
    ['/admin/messages', 'پیام‌ها', false],
    ['/admin/settings', 'تنظیمات', true],
  ]
  return (
    <div className="ad-shell" dir="rtl">
      <aside className="ad-side">
        <div className="ad-brand">ATW <span>Admin</span></div>
        <nav>
          {nav.filter(([, , adminOnly]) => !adminOnly || me.role === 'admin').map(([p, l]) => (
            <NavLink key={p} to={p} end={p === '/admin'} className={({ isActive }) => (isActive ? 'is-on' : undefined)}>{l}</NavLink>
          ))}
        </nav>
        <div className="ad-user">
          <b>{me.user}</b>
          <span>{me.role === 'admin' ? 'مدیر کل' : 'ناظر'}</span>
          <button type="button" onClick={onOut}>خروج</button>
        </div>
      </aside>
      <div className="ad-main">{children}</div>
    </div>
  )
}

function Bars({ items }) {
  const max = Math.max(1, ...items.map((i) => i.n))
  return (
    <ul className="ad-bars">
      {items.map((i) => (
        <li key={i.l}>
          <span>{i.l}</span>
          <div><b style={{ width: `${(i.n / max) * 100}%` }} /><em>{i.n}</em></div>
        </li>
      ))}
    </ul>
  )
}

async function download(path, filename) {
  const blob = await api(path, { admin: true })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 4000)
}

async function openPrint(path) {
  const blob = await api(path, { admin: true })
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank', 'noopener')
}

function Overview() {
  const [d, setD] = useState(null)
  useEffect(() => {
    let stop = false
    const load = () => api('/admin/overview', { admin: true }).then((x) => { if (!stop) setD(x) }).catch(() => {})
    load()
    const id = setInterval(load, 8000)
    return () => { stop = true; clearInterval(id) }
  }, [])
  if (!d) return <p>در حال بارگذاری…</p>
  const c = d.counts
  return (
    <>
      <h1>نمای کلی</h1>
      <div className="ad-stats">
        <article><b>{c.registrations}</b><span>ثبت‌نام</span></article>
        <article><b>{c.todayIn || 0}</b><span>الان داخل مجموعه</span></article>
        <article><b>{c.checkedIn || 0}</b><span>حداقل یک ورود</span></article>
        <article><b>{c.secretariatNew || 0}</b><span>نامه جدید دبیرخانه</span></article>
      </div>
      <div className="ad-charts">
        <section className="ad-card">
          <h2>وضعیت ثبت‌نام‌ها</h2>
          <Bars items={STATUSES.map((s) => ({ l: ST_FA[s], n: c.byStatus?.[s] || 0 }))} />
        </section>
        <section className="ad-card">
          <h2>ورود روزانه</h2>
          <Bars items={(c.entryByDay || []).map((x) => ({ l: x.d.slice(5), n: x.n }))} />
        </section>
      </div>
      <div className="ad-head">
        <h2>حاضرین الان</h2>
        <div className="ad-export">
          <button className="ad-btn ghost" type="button" onClick={() => download('/admin/presence.xls', 'atw-presence.xls')}>Excel ورود/خروج</button>
          <button className="ad-btn ghost" type="button" onClick={() => openPrint('/admin/presence.pdf')}>چاپ ورود/خروج</button>
        </div>
      </div>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead>
            <tr><th>ساعت</th><th>نام</th><th>موبایل</th><th>کد</th></tr>
          </thead>
          <tbody>
            {(d.inside || []).slice(0, 12).map((p) => (
              <tr key={p.id}>
                <td>{new Date(p.at).toLocaleTimeString('fa-IR', { timeZone: 'Asia/Tehran' })}</td>
                <td>{p.name}</td>
                <td className="mono">{p.mobile}</td>
                <td className="mono">{p.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {d.persistence === 'ephemeral' && (
        <div className="form-error">داده روی Vercel بدون Supabase موقت است. SUPABASE_URL و SUPABASE_SERVICE_ROLE_KEY را در Environment Variables بگذارید — فایل SUPABASE.md.</div>
      )}
    </>
  )
}

function ticketOf(r, extra = {}) {
  if (!r) return null
  return {
    code: r.code,
    barcode: r.barcode || extra.barcode,
    firstName: r.firstName || extra.firstName || '',
    lastName: r.lastName || extra.lastName || '',
    displayName: r.displayName || r.name || extra.displayName || extra.name,
    firstEntryAt: r.firstEntryAt || r.checkedInAt || extra.firstEntryAt || extra.checkedInAt || r.at || extra.at || 0,
  }
}

function Gate() {
  const inputRef = useRef(null)
  const [code, setCode] = useState('')
  const [flash, setFlash] = useState(null)
  const [d, setD] = useState(null)
  const [busy, setBusy] = useState(false)
  const [preview, setPreview] = useState(null)

  function focusScan() {
    inputRef.current?.focus()
  }

  async function refresh() {
    const x = await api('/admin/overview', { admin: true })
    setD(x)
  }

  useEffect(() => {
    refresh().catch(() => {})
    const id = setInterval(() => refresh().catch(() => {}), 4000)
    const t = setTimeout(focusScan, 200)
    return () => { clearInterval(id); clearTimeout(t) }
  }, [])

  async function submit(e) {
    e?.preventDefault()
    const raw = code
    setCode('')
    if (!raw.trim()) return
    setBusy(true)
    try {
      const out = await api('/admin/checkin', { method: 'POST', admin: true, body: { code: raw } })
      if (!out.allowed) {
        setFlash({
          ok: false,
          text: 'غیر مجاز',
          sub: 'این بارکد در سامانه ثبت نشده است.',
          name: '',
          mobile: '',
        })
        refresh().catch(() => {})
        return
      }
      const ticket = ticketOf(out.item, {
        barcode: out.barcode,
        firstName: out.firstName,
        lastName: out.lastName,
        checkedInAt: out.checkedInAt,
      })
      setFlash({
        ok: true,
        dir: out.dir,
        name: out.name,
        mobile: out.mobile,
        ticket,
        text: 'مجاز',
        sub: out.dir === 'out' ? 'خروج ثبت شد.' : 'ورود ثبت شد.',
      })
      if (out.firstEver && out.dir === 'in') setPreview(ticket)
      refresh().catch(() => {})
    } catch (ex) {
      setFlash({ ok: false, text: 'غیر مجاز', sub: errorText(ex, 'بارکد در سامانه نیست.'), name: '', mobile: '' })
    } finally {
      setBusy(false)
      setTimeout(focusScan, 50)
    }
  }

  const c = d?.counts || {}
  return (
    <>
      <h1>گیت ورود</h1>
      <p className="muted">اسکنر Cbon N-200 روی این فیلد. Enter = مجاز یا غیر مجاز. فیش ۸۰mm را ادمین با POS80U چاپ می‌کند.</p>
      <div className="ad-stats">
        <article><b>{c.todayIn || 0}</b><span>الان داخل</span></article>
        <article><b>{c.todayPass || 0}</b><span>تردد امروز</span></article>
        <article><b>{c.deniedToday || 0}</b><span>غیرمجاز امروز</span></article>
        <article><b>{d?.today || '—'}</b><span>تاریخ تهران</span></article>
      </div>
      <form className="ad-gate" onSubmit={submit}>
        <input
          ref={inputRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="اسکن بارکد خطی…"
          autoComplete="off"
          autoFocus
          disabled={busy}
        />
        <button className="ad-btn" type="submit" disabled={busy}>اسکن</button>
      </form>
      {flash ? (
        <div className={`ad-flash ${flash.ok ? 'is-ok' : 'is-bad'}`}>
          <b className="gate-v">{flash.text}</b>
          {flash.sub ? <span className="gate-dir">{flash.sub}</span> : null}
          {flash.name ? <span>{flash.name}</span> : null}
          {flash.mobile ? <span className="mono">{flash.mobile}</span> : null}
          {flash.ticket ? (
            <button type="button" className="ad-btn ghost" onClick={() => setPreview(flash.ticket)}>پیش‌نمایش فیش POS80U</button>
          ) : null}
        </div>
      ) : null}
      <div className="ad-head">
        <h2>الان داخل مجموعه</h2>
        <div className="ad-export">
          <button className="ad-btn ghost" type="button" onClick={() => download('/admin/presence.xls', 'atw-presence.xls')}>Excel</button>
          <button className="ad-btn ghost" type="button" onClick={() => openPrint('/admin/presence.pdf')}>چاپ گزارش</button>
        </div>
      </div>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead>
            <tr><th>ورود</th><th>نام</th><th>موبایل</th><th>کد</th><th></th></tr>
          </thead>
          <tbody>
            {(d?.inside || []).map((p) => (
              <tr key={p.id}>
                <td>{p.inAt ? new Date(p.inAt).toLocaleTimeString('fa-IR', { timeZone: 'Asia/Tehran' }) : '—'}</td>
                <td>{p.name}</td>
                <td className="mono">{p.mobile}</td>
                <td className="mono">{p.code}</td>
                <td>
                  <button type="button" className="ad-btn ghost" onClick={() => setPreview(ticketOf(p))}>فیش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ad-head">
        <h2>تردد امروز (ورود / خروج / غیرمجاز)</h2>
      </div>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead>
            <tr><th>ساعت</th><th>وضعیت</th><th>نام</th><th>موبایل</th><th>کد</th></tr>
          </thead>
          <tbody>
            {(d?.traffic || []).map((p) => (
              <tr key={p.id}>
                <td>{new Date(p.at).toLocaleTimeString('fa-IR', { timeZone: 'Asia/Tehran' })}</td>
                <td>{p.allowed === false ? 'غیر مجاز' : (p.dir === 'out' ? 'خروج' : 'ورود')}</td>
                <td>{p.name || '—'}</td>
                <td className="mono">{p.mobile || '—'}</td>
                <td className="mono">{p.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TicketPreview
        open={!!preview}
        ticket={preview}
        onClose={() => { setPreview(null); setTimeout(focusScan, 50) }}
      />
    </>
  )
}

function Registrations() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')
  const [st, setSt] = useState('')
  const [scan, setScan] = useState('')
  const [scanMsg, setScanMsg] = useState('')
  const nav = useNavigate()
  async function load() {
    const qs = new URLSearchParams()
    if (q) qs.set('q', q)
    if (st) qs.set('status', st)
    const out = await api(`/admin/registrations?${qs}`, { admin: true })
    setItems(out.items || [])
  }
  useEffect(() => { load().catch(() => {}) }, [])
  async function checkin(e) {
    e.preventDefault()
    setScanMsg('')
    try {
      const out = await api('/admin/checkin', { method: 'POST', admin: true, body: { code: scan } })
      if (!out.allowed) setScanMsg('غیر مجاز')
      else setScanMsg(out.dir === 'out' ? 'مجاز — خروج' : 'مجاز — ورود')
      setScan('')
      load()
    } catch (ex) {
      setScanMsg(errorText(ex, 'غیر مجاز'))
    }
  }
  return (
    <>
      <div className="ad-head">
        <h1>ثبت‌نام‌ها</h1>
        <div className="ad-export">
          <button className="ad-btn ghost" type="button" onClick={() => download('/admin/export.xls', 'atw-registrations.xls')}>Excel</button>
          <button className="ad-btn ghost" type="button" onClick={() => openPrint('/admin/export.pdf')}>PDF</button>
          <button className="ad-btn ghost" type="button" onClick={() => download('/admin/export.csv', 'atw-registrations.csv')}>CSV</button>
        </div>
      </div>
      <form className="ad-filters" onSubmit={checkin}>
        <input placeholder="اسکن بارکد Cbon N-200" value={scan} onChange={(e) => setScan(e.target.value)} autoComplete="off" />
        <button className="ad-btn" type="submit">ثبت ورود</button>
        {scanMsg ? <span className="muted">{scanMsg}</span> : null}
      </form>
      <div className="ad-filters">
        <input placeholder="جستجو کد، نام، کد ملی، موبایل" value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={st} onChange={(e) => setSt(e.target.value)}>
          <option value="">همه وضعیت‌ها</option>
          {STATUSES.map((s) => <option key={s} value={s}>{ST_FA[s]}</option>)}
        </select>
        <button className="ad-btn" type="button" onClick={load}>اعمال</button>
      </div>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead>
            <tr>
              <th>کد</th><th>نام</th><th>کد ملی</th><th>موبایل</th><th>شرکت</th><th>وضعیت</th><th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {items.map((r) => (
              <tr key={r.id} onClick={() => nav(`/admin/registrations/${r.id}`)}>
                <td className="mono">{r.code}</td>
                <td>{[r.firstName, r.lastName].filter(Boolean).join(' ') || r.companyName}</td>
                <td className="mono">{r.nationalId || '—'}</td>
                <td className="mono">{r.mobile}</td>
                <td>{r.companyName || '—'}</td>
                <td><span className={`st-chip st-${r.status}`}>{ST_FA[r.status] || r.status}</span></td>
                <td>{new Date(r.createdAt).toLocaleDateString('fa-IR')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function RegistrationDetail() {
  const { id } = useParams()
  const [r, setR] = useState(null)
  const [err, setErr] = useState('')
  const [preview, setPreview] = useState(false)
  useEffect(() => {
    api(`/admin/registrations/${id}`, { admin: true }).then((o) => setR(o.item)).catch((e) => setErr(e.message))
  }, [id])
  async function save(patch) {
    const out = await api(`/admin/registrations/${id}`, { method: 'PATCH', admin: true, body: patch })
    setR(out.item)
  }
  if (err) return <p className="form-error">{err}</p>
  if (!r) return <p>…</p>
  return (
    <>
      <Link to="/admin/registrations" className="text-link">بازگشت</Link>
      <h1>{[r.firstName, r.lastName].filter(Boolean).join(' ') || r.companyName || r.code}</h1>
      <div className="ad-detail">
        <section>
          <p className="mono">{r.code}</p>
          <p>{[r.firstName, r.lastName].filter(Boolean).join(' ')}</p>
          {(r.barcode || r.qr) ? <img className="ad-barcode" src={r.barcode || r.qr} alt="" /> : null}
          <button className="ad-btn" type="button" onClick={() => setPreview(true)}>پیش‌نمایش فیش POS80U</button>
          <label>وضعیت
            <select value={r.status} onChange={(e) => save({ status: e.target.value })}>
              {STATUSES.map((s) => <option key={s} value={s}>{ST_FA[s]}</option>)}
            </select>
          </label>
          <label>شماره غرفه
            <input defaultValue={r.booth} onBlur={(e) => save({ booth: e.target.value })} />
          </label>
          <label>یادداشت مدیر
            <textarea defaultValue={r.adminNote} onBlur={(e) => save({ adminNote: e.target.value })} />
          </label>
        </section>
        <section>
          <dl className="ad-dl">
            <dt>نام</dt><dd>{r.firstName} {r.lastName}</dd>
            <dt>کد ملی</dt><dd className="mono">{r.nationalId || '—'}</dd>
            <dt>موبایل</dt><dd className="mono">{r.mobile}</dd>
            <dt>کد بلیط</dt><dd className="mono">{r.code}</dd>
            <dt>اولین ورود</dt><dd>{r.checkedInAt ? new Date(r.checkedInAt).toLocaleString('fa-IR', { timeZone: 'Asia/Tehran' }) : '—'}</dd>
            <dt>تردد روزانه</dt>
            <dd>
              {(r.checkins || []).length === 0 ? '—' : (
                <ul>
                  {(r.checkins || []).map((c) => (
                    <li key={c.day}>
                      {c.day}
                      {' — ورود '}
                      {c.inAt || c.at ? new Date(c.inAt || c.at).toLocaleTimeString('fa-IR', { timeZone: 'Asia/Tehran' }) : '—'}
                      {c.outAt ? ` — خروج ${new Date(c.outAt).toLocaleTimeString('fa-IR', { timeZone: 'Asia/Tehran' })}` : ''}
                      {c.inside ? ' — داخل' : ' — خارج'}
                    </li>
                  ))}
                </ul>
              )}
            </dd>
            <dt>حوزه</dt><dd>{r.activityField || '—'}</dd>
            <dt>محل ثبت</dt><dd>{r.registerPlace}</dd>
            <dt>نوع</dt><dd>{r.companyType}</dd>
            <dt>دانش‌بنیان</dt><dd>{r.knowledgeBased ? 'بله' : 'خیر'}</dd>
            <dt>نصر</dt><dd>{r.nasrMember ? 'بله' : 'خیر'}</dd>
            <dt>انجمن دانش‌بنیان</dt><dd>{r.kbAssocMember ? 'بله' : 'خیر'}</dd>
            <dt>آدرس</dt><dd>{r.address}</dd>
            <dt>تلفن</dt><dd>{r.phone}</dd>
            <dt>نماینده</dt><dd>{r.representative?.name} — {r.representative?.mobile}</dd>
            <dt>تجهیزات</dt><dd>{r.equipment || '—'}</dd>
            <dt>افراد غرفه</dt>
            <dd>
              <ul>{(r.staff || []).map((p, i) => <li key={i}>{p.name} {p.role} {p.mobile}</li>)}</ul>
            </dd>
          </dl>
        </section>
      </div>
      <TicketPreview open={preview} ticket={r} onClose={() => setPreview(false)} />
    </>
  )
}

function SecretariatAdmin() {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(null)
  async function load() {
    const out = await api('/admin/secretariat', { admin: true })
    setItems(out.items || [])
  }
  useEffect(() => { load().catch(() => {}) }, [])
  async function mark(id, status) {
    await api(`/admin/secretariat/${id}`, { method: 'PATCH', admin: true, body: { status } })
    load()
  }
  async function file(id, name) {
    const blob = await api(`/admin/files/${id}`, { admin: true })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = name || 'file'
    a.click()
  }
  return (
    <>
      <div className="ad-head">
        <h1>دبیرخانه</h1>
        <div className="ad-export">
          <button className="ad-btn ghost" type="button" onClick={() => download('/admin/secretariat.xls', 'atw-secretariat.xls')}>Excel</button>
          <button className="ad-btn ghost" type="button" onClick={() => openPrint('/admin/secretariat.pdf')}>PDF</button>
        </div>
      </div>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead>
            <tr><th>نوع</th><th>نام</th><th>سازمان</th><th>موضوع</th><th>وضعیت</th><th></th></tr>
          </thead>
          <tbody>
            {items.map((m) => (
              <tr key={m.id} onClick={() => setOpen(m)}>
                <td>{m.actorType}</td>
                <td>{m.name}<div className="muted">{(m.message || '').slice(0, 80)}</div></td>
                <td>{m.org || '—'}</td>
                <td>{m.subject || '—'}</td>
                <td>{ST_FA[m.status] || m.status}</td>
                <td>
                  {m.status === 'new' && <button type="button" className="ad-btn ghost" onClick={(e) => { e.stopPropagation(); mark(m.id, 'read') }}>خوانده</button>}
                  {m.status !== 'done' && <button type="button" className="ad-btn ghost" onClick={(e) => { e.stopPropagation(); mark(m.id, 'done') }}>انجام</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <div className="cms-modal" onClick={() => setOpen(null)}>
          <div className="cms-modal-card" onClick={(e) => e.stopPropagation()}>
            <header>
              <h2>{open.subject || open.name}</h2>
              <button type="button" className="ad-btn ghost" onClick={() => setOpen(null)}>بستن</button>
            </header>
            <dl className="ad-dl">
              <dt>نوع</dt><dd>{open.actorType}</dd>
              <dt>نام</dt><dd>{open.name}</dd>
              <dt>سازمان</dt><dd>{open.org || '—'}</dd>
              <dt>ایمیل</dt><dd>{open.email || '—'}</dd>
              <dt>تلفن</dt><dd>{open.phone || '—'}</dd>
              <dt>تاریخ</dt><dd>{new Date(open.createdAt).toLocaleString('fa-IR')}</dd>
            </dl>
            <p style={{ whiteSpace: 'pre-wrap', marginTop: 16 }}>{open.message}</p>
            {open.fileId ? (
              <p><button type="button" className="ad-btn" onClick={() => file(open.fileId, open.file?.name)}>دانلود پیوست</button></p>
            ) : null}
          </div>
        </div>
      )}
    </>
  )
}

function Messages() {
  const [items, setItems] = useState([])
  async function load() {
    const out = await api('/admin/messages', { admin: true })
    setItems(out.items || [])
  }
  useEffect(() => { load().catch(() => {}) }, [])
  async function mark(id, status) {
    await api(`/admin/messages/${id}`, { method: 'PATCH', admin: true, body: { status } })
    load()
  }
  return (
    <>
      <h1>پیام‌ها و فرم‌ها</h1>
      <div className="ad-table-wrap">
        <table className="ad-table">
          <thead>
            <tr><th>نوع</th><th>نام</th><th>سازمان</th><th>تلفن</th><th>وضعیت</th><th></th></tr>
          </thead>
          <tbody>
            {items.map((m) => (
              <tr key={m.id}>
                <td>{m.kind}</td>
                <td>{m.name}<div className="muted">{m.message}</div></td>
                <td>{m.org}</td>
                <td className="mono">{m.phone}</td>
                <td>{ST_FA[m.status] || m.status}</td>
                <td>
                  {m.status === 'new' && <button type="button" className="ad-btn ghost" onClick={() => mark(m.id, 'read')}>خوانده</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function Settings() {
  const [c, setC] = useState(null)
  const [ok, setOk] = useState('')
  useEffect(() => {
    api('/admin/content', { admin: true }).then((o) => setC(o.content)).catch(() => {})
  }, [])
  async function save(e) {
    e.preventDefault()
    const out = await api('/admin/content', {
      method: 'PUT',
      admin: true,
      body: { registrationOpen: c.registrationOpen, noticeFa: c.noticeFa, noticeEn: c.noticeEn },
    })
    setC(out.content)
    setOk('ذخیره شد.')
  }
  if (!c) return <p>…</p>
  return (
    <>
      <h1>تنظیمات</h1>
      <form className="ad-card form" onSubmit={save}>
        <label className="chk">
          <input type="checkbox" checked={c.registrationOpen !== false} onChange={(e) => setC({ ...c, registrationOpen: e.target.checked })} />
          ثبت‌نام شرکت‌ها باز است
        </label>
        <label>اعلان فارسی<textarea value={c.noticeFa || ''} onChange={(e) => setC({ ...c, noticeFa: e.target.value })} /></label>
        <label>Notice (EN)<textarea value={c.noticeEn || ''} onChange={(e) => setC({ ...c, noticeEn: e.target.value })} /></label>
        <button className="ad-btn" type="submit">ذخیره</button>
        {ok ? <p>{ok}</p> : null}
      </form>
      <section className="ad-card sms-help">
        <h2>Supabase و پیامک</h2>
        <p>متغیرها را در Vercel → Settings → Environment Variables بگذارید، سپس Redeploy.</p>
        <ul>
          <li><code>SUPABASE_URL</code> آدرس پروژه (https://xxxx.supabase.co)</li>
          <li><code>SUPABASE_SERVICE_ROLE_KEY</code> کلید service_role (مخفی)</li>
          <li><code>JWT_SECRET</code> رشته تصادفی بلند</li>
          <li><code>SMS_PROVIDER</code> = kavenegar | smsir | melipayamak | ghasedak | webhook</li>
          <li><code>SMS_API_KEY</code> و در کاوه‌نگار <code>SMS_OTP_TEMPLATE</code></li>
        </ul>
        <p>راهنما: <code>SUPABASE.md</code> و <code>SMS-SETUP.md</code></p>
      </section>
    </>
  )
}

function Guard({ me, role, children }) {
  if (role && me.role !== role) return <Navigate to="/admin" replace />
  return children
}

export default function AdminApp() {
  const { me, ready, setMe } = useAdmin()
  const nav = useNavigate()
  if (!ready) return <div className="ad-login"><p>…</p></div>
  if (!me) return <Login onOk={(m) => { setMe(m); nav('/admin') }} />
  function out() {
    setToken('', 'admin')
    setMe(null)
    nav('/admin')
  }
  return (
    <Shell me={me} onOut={out}>
      <Routes>
        <Route index element={<Overview />} />
        <Route path="gate" element={<Gate />} />
        <Route path="registrations" element={<Registrations />} />
        <Route path="registrations/:id" element={<RegistrationDetail />} />
        <Route path="secretariat" element={<SecretariatAdmin />} />
        <Route path="messages" element={<Messages />} />
        <Route path="content" element={<Guard me={me} role="admin"><ContentStudio tab="text" /></Guard>} />
        <Route path="media" element={<Guard me={me} role="admin"><ContentStudio tab="media" /></Guard>} />
        <Route path="settings" element={<Guard me={me} role="admin"><Settings /></Guard>} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Shell>
  )
}
