import { useEffect, useState } from 'react'
import PageShell from './PageShell'
import DiamondButton from '../components/DiamondButton'
import { useI18n } from '../context/Language'
import { api, getToken, setToken } from '../lib/api'

const EMPTY_STAFF = () => ({ name: '', role: '', mobile: '' })

export default function Register() {
  const { t, path } = useI18n()
  const r = t.register
  const [step, setStep] = useState('boot')
  const [mobile, setMobile] = useState('')
  const [code, setCode] = useState('')
  const [wait, setWait] = useState(0)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const [mine, setMine] = useState([])
  const [done, setDone] = useState(null)
  const [form, setForm] = useState({
    companyName: '',
    activityField: r.fields.activityOptions[0],
    registerPlace: '',
    companyType: r.fields.typeOptions[0],
    knowledgeBased: false,
    nasrMember: false,
    kbAssocMember: false,
    address: '',
    phone: '',
    repName: '',
    repRole: '',
    repMobile: '',
    equipment: '',
    staff: [EMPTY_STAFF()],
  })

  useEffect(() => {
    let stop = false
    ;(async () => {
      if (!getToken('user')) {
        setStep('mobile')
        return
      }
      try {
        const me = await api('/auth/me')
        if (stop) return
        if (me.role !== 'company') {
          setToken('', 'user')
          setStep('mobile')
          return
        }
        setMobile(me.mobile)
        setMine(me.registrations || [])
        setStep('form')
      } catch {
        if (!stop) {
          setToken('', 'user')
          setStep('mobile')
        }
      }
    })()
    return () => { stop = true }
  }, [])

  useEffect(() => {
    if (wait <= 0) return
    const id = setTimeout(() => setWait((v) => v - 1), 1000)
    return () => clearTimeout(id)
  }, [wait])

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  async function requestOtp(e) {
    e?.preventDefault()
    setErr('')
    setBusy(true)
    try {
      const out = await api('/auth/otp/request', { method: 'POST', body: { mobile } })
      setMobile(out.mobile)
      setWait(out.wait || 90)
      if (out.devCode) setCode(out.devCode)
      setStep('otp')
    } catch (ex) {
      setErr(ex.message)
      if (ex.data?.wait) setWait(ex.data.wait)
    } finally {
      setBusy(false)
    }
  }

  async function verifyOtp(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    try {
      const out = await api('/auth/otp/verify', { method: 'POST', body: { mobile, code } })
      setToken(out.token, 'user')
      setMine(out.registrations || [])
      setStep('form')
    } catch (ex) {
      setErr(ex.message)
    } finally {
      setBusy(false)
    }
  }

  async function submit(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    try {
      const out = await api('/register', {
        method: 'POST',
        body: {
          ...form,
          representative: { name: form.repName, role: form.repRole, mobile: form.repMobile || mobile },
        },
      })
      setDone(out.registration)
      setMine((m) => [out.registration, ...m])
      setStep('done')
    } catch (ex) {
      setErr(ex.message)
    } finally {
      setBusy(false)
    }
  }

  function logout() {
    setToken('', 'user')
    setMine([])
    setDone(null)
    setStep('mobile')
  }

  return (
    <PageShell title={r.title} lead={r.lead}>
      <div className="kicker">{r.kicker}</div>
      {err ? <div className="form-error">{err}</div> : null}

      {step === 'mobile' && (
        <form className="form reg-card" onSubmit={requestOtp}>
          <p className="lead">{r.otpHint}</p>
          <label>
            {r.mobile}
            <input
              required
              inputMode="numeric"
              autoComplete="tel"
              placeholder="09xxxxxxxxx"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </label>
          <DiamondButton type="submit">{busy ? r.wait : r.sendCode}</DiamondButton>
        </form>
      )}

      {step === 'otp' && (
        <form className="form reg-card" onSubmit={verifyOtp}>
          <p className="lead">{r.codeSent} {mobile}</p>
          <label>
            {r.otp}
            <input
              required
              inputMode="numeric"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
          <DiamondButton type="submit">{busy ? r.wait : r.verify}</DiamondButton>
          <button type="button" className="text-link" disabled={wait > 0 || busy} onClick={requestOtp}>
            {wait > 0 ? `${r.resend} (${wait})` : r.resend}
          </button>
        </form>
      )}

      {step === 'form' && (
        <form className="form reg-card" onSubmit={submit}>
          <div className="reg-bar">
            <span>{r.loggedIn} {mobile}</span>
            <button type="button" className="text-link" onClick={logout}>{r.logout}</button>
          </div>
          {mine.length > 0 && (
            <div className="reg-mine">
              <h3>{r.previous}</h3>
              <ul>
                {mine.map((x) => (
                  <li key={x.id}>
                    <a href={path(`/status/${x.code}`)}>{x.code}</a>
                    <em>{r.status[x.status] || x.status}</em>
                    <strong>{x.companyName}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <h3 className="reg-h">{r.companyBlock}</h3>
          <label>{r.fields.companyName}<input required value={form.companyName} onChange={(e) => set('companyName', e.target.value)} /></label>
          <label>
            {r.fields.activityField}
            <select value={form.activityField} onChange={(e) => set('activityField', e.target.value)}>
              {r.fields.activityOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label>{r.fields.registerPlace}<input required value={form.registerPlace} onChange={(e) => set('registerPlace', e.target.value)} /></label>
          <label>
            {r.fields.companyType}
            <select value={form.companyType} onChange={(e) => set('companyType', e.target.value)}>
              {r.fields.typeOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <div className="reg-checks">
            <label className="chk"><input type="checkbox" checked={form.knowledgeBased} onChange={(e) => set('knowledgeBased', e.target.checked)} /> {r.fields.knowledgeBased}</label>
            <label className="chk"><input type="checkbox" checked={form.nasrMember} onChange={(e) => set('nasrMember', e.target.checked)} /> {r.fields.nasrMember}</label>
            <label className="chk"><input type="checkbox" checked={form.kbAssocMember} onChange={(e) => set('kbAssocMember', e.target.checked)} /> {r.fields.kbAssocMember}</label>
          </div>
          <label>{r.fields.address}<textarea required value={form.address} onChange={(e) => set('address', e.target.value)} /></label>
          <label>{r.fields.phone}<input required value={form.phone} onChange={(e) => set('phone', e.target.value)} /></label>
          <h3 className="reg-h">{r.repBlock}</h3>
          <label>{r.fields.repName}<input required value={form.repName} onChange={(e) => set('repName', e.target.value)} /></label>
          <label>{r.fields.repRole}<input value={form.repRole} onChange={(e) => set('repRole', e.target.value)} /></label>
          <label>{r.fields.repMobile}<input placeholder="09xxxxxxxxx" value={form.repMobile} onChange={(e) => set('repMobile', e.target.value)} /></label>
          <h3 className="reg-h">{r.boothBlock}</h3>
          <label>{r.fields.equipment}<textarea value={form.equipment} onChange={(e) => set('equipment', e.target.value)} placeholder={r.fields.equipmentPh} /></label>
          {form.staff.map((p, i) => (
            <div className="staff-row" key={i}>
              <label>{r.fields.staffName}<input required value={p.name} onChange={(e) => {
                const staff = form.staff.slice()
                staff[i] = { ...p, name: e.target.value }
                set('staff', staff)
              }} /></label>
              <label>{r.fields.staffRole}<input value={p.role} onChange={(e) => {
                const staff = form.staff.slice()
                staff[i] = { ...p, role: e.target.value }
                set('staff', staff)
              }} /></label>
              <label>{r.fields.staffMobile}<input value={p.mobile} onChange={(e) => {
                const staff = form.staff.slice()
                staff[i] = { ...p, mobile: e.target.value }
                set('staff', staff)
              }} /></label>
              {form.staff.length > 1 && (
                <button type="button" className="text-link" onClick={() => set('staff', form.staff.filter((_, j) => j !== i))}>{r.remove}</button>
              )}
            </div>
          ))}
          <button type="button" className="text-link" onClick={() => set('staff', [...form.staff, EMPTY_STAFF()])}>{r.addStaff}</button>
          <DiamondButton type="submit">{busy ? r.wait : r.submit}</DiamondButton>
        </form>
      )}

      {step === 'done' && done && (
        <div className="reg-card qr-card">
          <h3>{r.successTitle}</h3>
          <p className="lead">{r.successLead}</p>
          <div className="qr-box">
            <img src={done.qr} alt={done.code} />
          </div>
          <div className="track-code">{done.code}</div>
          <p>{r.keepCode}</p>
          <a className="text-link" href={path(`/status/${done.code}`)}>{r.watchStatus}</a>
        </div>
      )}
    </PageShell>
  )
}
