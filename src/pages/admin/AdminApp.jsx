import { useEffect, useState } from 'react'
import '../../styles/admin.css'
import { Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { api, getToken, setToken } from '../../lib/api'

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
        const out = await api('/auth/me', { admin: true })
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
      const out = await api('/auth/admin', { method: 'POST', body: { user, pass } })
      setToken(out.token, 'admin')
      onOk({ role: out.role, user: out.user })
    } catch (ex) {
      setErr(ex.message)
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
    ['/', 'نمای کلی'],
    ['/registrations', 'ثبت‌نام‌ها'],
    ['/messages', 'پیام‌ها'],
  ]
  if (me.role === 'admin') nav.push(['/settings', 'تنظیمات'])
  return (
    <div className="ad-shell" dir="rtl">
      <aside className="ad-side">
        <div className="ad-brand">ATW <span>Admin</span></div>
        <nav>
          {nav.map(([p, l]) => (
            <Link key={p} to={`/admin${p === '/' ? '' : p}`}>{l}</Link>
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

function Overview() {
  const [d, setD] = useState(null)
  useEffect(() => { api('/admin/overview', { admin: true }).then(setD).catch(() => {}) }, [])
  if (!d) return <p>در حال بارگذاری…</p>
  const c = d.counts
  return (
    <>
      <h1>نمای کلی</h1>
      <div className="ad-stats">
        <article><b>{c.registrations}</b><span>ثبت‌نام شرکت</span></article>
        <article><b>{c.messages}</b><span>پیام</span></article>
        <article><b>{c.unread}</b><span>پیام خوانده‌نشده</span></article>
        <article><b>{d.sms ? 'فعال' : 'خاموش'}</b><span>پیامک</span></article>
      </div>
      <h2>وضعیت ثبت‌نام‌ها</h2>
      <ul className="ad-pills">
        {STATUSES.map((s) => (
          <li key={s}><em>{ST_FA[s]}</em> {c.byStatus?.[s] || 0}</li>
        ))}
      </ul>
      {d.persistence === 'ephemeral' && (
        <div className="form-error">ذخیره روی Vercel بدون DATABASE_URL موقت است. Neon Postgres را در Environment Variables اضافه کنید.</div>
      )}
    </>
  )
}

function Registrations() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')
  const [st, setSt] = useState('')
  const nav = useNavigate()
  async function load() {
    const qs = new URLSearchParams()
    if (q) qs.set('q', q)
    if (st) qs.set('status', st)
    const out = await api(`/admin/registrations?${qs}`, { admin: true })
    setItems(out.items || [])
  }
  useEffect(() => { load().catch(() => {}) }, [])
  async function exp() {
    const blob = await api('/admin/export', { admin: true })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'atw-registrations.csv'
    a.click()
  }
  return (
    <>
      <div className="ad-head">
        <h1>ثبت‌نام شرکت‌ها</h1>
        <button className="ad-btn ghost" type="button" onClick={exp}>خروجی CSV</button>
      </div>
      <div className="ad-filters">
        <input placeholder="جستجو کد، شرکت، موبایل" value={q} onChange={(e) => setQ(e.target.value)} />
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
              <th>کد</th><th>شرکت</th><th>موبایل</th><th>وضعیت</th><th>غرفه</th><th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {items.map((r) => (
              <tr key={r.id} onClick={() => nav(`/admin/registrations/${r.id}`)}>
                <td className="mono">{r.code}</td>
                <td>{r.companyName}</td>
                <td className="mono">{r.mobile}</td>
                <td><span className={`st-chip st-${r.status}`}>{ST_FA[r.status] || r.status}</span></td>
                <td>{r.booth || '—'}</td>
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
      <h1>{r.companyName}</h1>
      <div className="ad-detail">
        <section>
          <p className="mono">{r.code}</p>
          {r.qr ? <img className="ad-qr" src={r.qr} alt="" /> : null}
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
            <dt>حوزه</dt><dd>{r.activityField}</dd>
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
    const out = await api('/admin/content', { method: 'PUT', admin: true, body: c })
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
        <h2>اتصال پیامک</h2>
        <p>کلید API را در Vercel → Settings → Environment Variables وارد کنید، سپس Redeploy.</p>
        <ul>
          <li><code>SMS_PROVIDER</code> = kavenegar | smsir | melipayamak | ghasedak | webhook</li>
          <li><code>SMS_API_KEY</code> کلید کاوه‌نگار / sms.ir / قاصدک</li>
          <li><code>SMS_OTP_TEMPLATE</code> نام پترن OTP (کاوه‌نگار)</li>
          <li><code>SMS_SENDER</code> شماره خط</li>
          <li><code>DATABASE_URL</code> رشته اتصال Neon/Postgres برای ماندگاری داده</li>
          <li><code>JWT_SECRET</code> و در صورت نیاز <code>ADMIN_PASS</code></li>
        </ul>
        <p>فایل کامل: <code>SMS-SETUP.md</code> در ریشه پروژه.</p>
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
        <Route path="registrations" element={<Registrations />} />
        <Route path="registrations/:id" element={<RegistrationDetail />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Guard me={me} role="admin"><Settings /></Guard>} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Shell>
  )
}
