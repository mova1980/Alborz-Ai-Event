import { useState } from 'react'
import PageShell from './PageShell'
import DiamondButton from '../components/DiamondButton'
import { useI18n } from '../context/Language'
import { api } from '../lib/api'

const MAX = 1_800_000

function readFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null)
    if (file.size > MAX) return reject(new Error('file_size'))
    const r = new FileReader()
    r.onload = () => resolve({ name: file.name, mime: file.type, data: String(r.result || '') })
    r.onerror = () => reject(new Error('file_read'))
    r.readAsDataURL(file)
  })
}

export default function Secretariat() {
  const { t } = useI18n()
  const s = t.secretariat
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const [hp, setHp] = useState('')

  if (sent) {
    return (
      <PageShell title={s.title} lead={s.lead}>
        <div className="kicker">{s.kicker}</div>
        <div className="form-success">{s.sent}</div>
      </PageShell>
    )
  }

  return (
    <PageShell title={s.title} lead={s.lead}>
      <div className="kicker">{s.kicker}</div>
      <form
        className="form reg-card"
        onSubmit={async (e) => {
          e.preventDefault()
          setErr('')
          setBusy(true)
          const fd = new FormData(e.target)
          try {
            const file = fd.get('file')
            const packed = file && file.size ? await readFile(file) : null
            await api('/secretariat', {
              method: 'POST',
              body: {
                actorType: fd.get('actorType'),
                name: fd.get('name'),
                org: fd.get('org'),
                role: fd.get('role'),
                email: fd.get('email'),
                phone: fd.get('phone'),
                subject: fd.get('subject'),
                message: fd.get('message'),
                website: hp,
                file: packed,
              },
            })
            setSent(true)
          } catch (ex) {
            setErr(ex.message === 'file_size' ? s.fileErr : ex.message)
          } finally {
            setBusy(false)
          }
        }}
      >
        {err ? <div className="form-error">{err}</div> : null}
        <label>
          {s.actor}
          <select name="actorType" defaultValue={s.actors[0]}>
            {s.actors.map((a) => <option key={a}>{a}</option>)}
          </select>
        </label>
        <label>{s.name}<input required name="name" autoComplete="name" /></label>
        <label>{s.org}<input name="org" autoComplete="organization" /></label>
        <label>{s.role}<input name="role" /></label>
        <label>{s.email}<input type="email" name="email" autoComplete="email" /></label>
        <label>{s.phone}<input name="phone" autoComplete="tel" /></label>
        <label>{s.subject}<input name="subject" /></label>
        <label>{s.message}<textarea required name="message" /></label>
        <label>{s.file}<input type="file" name="file" accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,application/pdf,image/*" /></label>
        <p className="muted">{s.fileHint}</p>
        <div className="hp-field" aria-hidden="true">
          <label>website<input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></label>
        </div>
        <DiamondButton type="submit">{busy ? t.register.wait : s.submit}</DiamondButton>
      </form>
    </PageShell>
  )
}
