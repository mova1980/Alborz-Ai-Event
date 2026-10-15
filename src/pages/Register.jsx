import { useMemo, useState } from 'react'
import PageShell from './PageShell'
import DiamondButton from '../components/DiamondButton'
import { useI18n } from '../context/Language'
import { api } from '../lib/api'

const EMPTY_STAFF = () => ({ name: '', role: '', mobile: '' })

export default function Register() {
  const { t, path } = useI18n()
  const r = t.register
  const [step, setStep] = useState('form')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    nationalId: '',
    companyName: '',
    activityField: '',
    registerPlace: '',
    companyType: '',
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
    website: '',
  })

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const req = (label) => `${label} *`

  const ticketHref = useMemo(() => {
    if (!done?.qr) return ''
    return done.qr
  }, [done])

  async function submit(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    try {
      const out = await api('/register', {
        method: 'POST',
        body: {
          ...form,
          representative: {
            name: form.repName || `${form.firstName} ${form.lastName}`.trim(),
            role: form.repRole,
            mobile: form.repMobile || form.mobile,
          },
          staff: (form.staff || []).filter((p) => p.name),
        },
      })
      setDone(out.registration)
      setStep('done')
    } catch (ex) {
      setErr(ex.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <PageShell title={r.title} lead={r.lead}>
      <div className="kicker">{r.kicker}</div>
      {err ? <div className="form-error">{err}</div> : null}

      {step === 'form' && (
        <form className="form reg-card" onSubmit={submit} autoComplete="on">
          <p className="lead">{r.requiredHint}</p>
          <h3 className="reg-h">{r.personBlock}</h3>
          <label>{req(r.fields.firstName)}<input required value={form.firstName} onChange={(e) => set('firstName', e.target.value)} autoComplete="given-name" /></label>
          <label>{req(r.fields.lastName)}<input required value={form.lastName} onChange={(e) => set('lastName', e.target.value)} autoComplete="family-name" /></label>
          <label>
            {req(r.mobile)}
            <input required inputMode="numeric" autoComplete="tel" placeholder="09xxxxxxxxx" value={form.mobile} onChange={(e) => set('mobile', e.target.value)} />
          </label>
          <label>
            {req(r.fields.nationalId)}
            <input required inputMode="numeric" maxLength={10} value={form.nationalId} onChange={(e) => set('nationalId', e.target.value)} />
          </label>
          <div className="hp-field" aria-hidden="true">
            <label>website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set('website', e.target.value)} /></label>
          </div>

          <h3 className="reg-h">{r.companyBlock} <span className="opt">{r.optional}</span></h3>
          <label>{r.fields.companyName}<input value={form.companyName} onChange={(e) => set('companyName', e.target.value)} /></label>
          <label>
            {r.fields.activityField}
            <select value={form.activityField} onChange={(e) => set('activityField', e.target.value)}>
              <option value="">{r.optional}</option>
              {r.fields.activityOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label>{r.fields.registerPlace}<input value={form.registerPlace} onChange={(e) => set('registerPlace', e.target.value)} /></label>
          <label>
            {r.fields.companyType}
            <select value={form.companyType} onChange={(e) => set('companyType', e.target.value)}>
              <option value="">{r.optional}</option>
              {r.fields.typeOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <div className="reg-checks">
            <label className="chk"><input type="checkbox" checked={form.knowledgeBased} onChange={(e) => set('knowledgeBased', e.target.checked)} /> {r.fields.knowledgeBased}</label>
            <label className="chk"><input type="checkbox" checked={form.nasrMember} onChange={(e) => set('nasrMember', e.target.checked)} /> {r.fields.nasrMember}</label>
            <label className="chk"><input type="checkbox" checked={form.kbAssocMember} onChange={(e) => set('kbAssocMember', e.target.checked)} /> {r.fields.kbAssocMember}</label>
          </div>
          <label>{r.fields.address}<textarea value={form.address} onChange={(e) => set('address', e.target.value)} /></label>
          <label>{r.fields.phone}<input value={form.phone} onChange={(e) => set('phone', e.target.value)} /></label>
          <h3 className="reg-h">{r.repBlock} <span className="opt">{r.optional}</span></h3>
          <label>{r.fields.repName}<input value={form.repName} onChange={(e) => set('repName', e.target.value)} /></label>
          <label>{r.fields.repRole}<input value={form.repRole} onChange={(e) => set('repRole', e.target.value)} /></label>
          <label>{r.fields.repMobile}<input placeholder="09xxxxxxxxx" value={form.repMobile} onChange={(e) => set('repMobile', e.target.value)} /></label>
          <h3 className="reg-h">{r.boothBlock} <span className="opt">{r.optional}</span></h3>
          <label>{r.fields.equipment}<textarea value={form.equipment} onChange={(e) => set('equipment', e.target.value)} placeholder={r.fields.equipmentPh} /></label>
          {form.staff.map((p, i) => (
            <div className="staff-row" key={i}>
              <label>{r.fields.staffName}<input value={p.name} onChange={(e) => {
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
          {done.displayName ? <p>{done.displayName}</p> : null}
          <div className="qr-box">
            <img src={done.qr} alt={done.code} />
          </div>
          <div className="track-code">{done.code}</div>
          <p>{r.keepCode}</p>
          <div className="reg-bar" style={{ justifyContent: 'center' }}>
            {ticketHref ? <a className="text-link" href={ticketHref} download={`${done.code}.png`}>{r.downloadQr}</a> : null}
            <a className="text-link" href={path(`/status/${done.code}`)}>{r.watchStatus}</a>
          </div>
        </div>
      )}
    </PageShell>
  )
}
