import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageShell from './PageShell'
import DiamondButton from '../components/DiamondButton'
import { useI18n } from '../context/Language'
import { api } from '../lib/api'

export default function Status() {
  const { code: param } = useParams()
  const { t } = useI18n()
  const s = t.statusPage
  const [code, setCode] = useState(param || '')
  const [mobile, setMobile] = useState('')
  const [row, setRow] = useState(null)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!param) return
    let stop = false
    ;(async () => {
      try {
        const out = await api(`/status/${encodeURIComponent(param)}`)
        if (!stop) setRow(out.registration)
      } catch (e) {
        if (!stop) setErr(e.message)
      }
    })()
    return () => { stop = true }
  }, [param])

  async function lookup(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    try {
      const out = await api('/status/lookup', { method: 'POST', body: { code, mobile } })
      setRow(out.registration)
    } catch (ex) {
      setErr(ex.message)
      setRow(null)
    } finally {
      setBusy(false)
    }
  }

  return (
    <PageShell title={s.title} lead={s.lead}>
      {!row && (
        <form className="form reg-card" onSubmit={lookup}>
          {err ? <div className="form-error">{err}</div> : null}
          <label>{s.code}<input required value={code} onChange={(e) => setCode(e.target.value)} placeholder="ATW26-XXXX-XXXX" /></label>
          <label>{s.mobile}<input required value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="09xxxxxxxxx" /></label>
          <DiamondButton type="submit">{busy ? t.register.wait : s.submit}</DiamondButton>
        </form>
      )}
      {row && (
        <div className="reg-card qr-card">
          <div className={`st-chip st-${row.status}`}>{t.register.status[row.status] || row.status}</div>
          <h3>{row.companyName}</h3>
          <div className="track-code">{row.code}</div>
          {row.qr ? <div className="qr-box"><img src={row.qr} alt="" /></div> : null}
          {row.booth ? <p>{s.booth}: {row.booth}</p> : null}
          {row.adminNote ? <p className="lead">{row.adminNote}</p> : null}
          <p className="muted">{s.updated}</p>
        </div>
      )}
    </PageShell>
  )
}
