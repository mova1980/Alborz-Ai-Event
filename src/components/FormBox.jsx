import { useState } from 'react'
import DiamondButton from './DiamondButton'
import { useI18n } from '../context/Language'
import { api } from '../lib/api'

export default function FormBox({ variant = 'visit' }) {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const f = t.form

  if (sent) return <div className="form-success">{f.sent}</div>

  const types = variant === 'exhibit' ? f.boothTypes : f.visitTypes

  return (
    <form
      className="form"
      onSubmit={async (e) => {
        e.preventDefault()
        setErr('')
        setBusy(true)
        const fd = new FormData(e.target)
        const extra = {}
        if (variant === 'problem') {
          extra.problem = {
            title: fd.get('ptitle'),
            current: fd.get('current'),
            data: fd.get('data'),
            goal: fd.get('goal'),
            kpi: fd.get('kpi'),
            budget: fd.get('budget'),
            time: fd.get('time'),
          }
        }
        try {
          await api('/messages', {
            method: 'POST',
            body: {
              kind: variant,
              name: fd.get('name'),
              org: fd.get('org'),
              role: fd.get('role'),
              email: fd.get('email'),
              phone: fd.get('phone'),
              type: fd.get('type') || '',
              message: fd.get('message') || '',
              extra,
            },
          })
          setSent(true)
        } catch (ex) {
          setErr(ex.message)
        } finally {
          setBusy(false)
        }
      }}
    >
      {err ? <div className="form-error">{err}</div> : null}
      <label>{f.name}<input required name="name" autoComplete="name" /></label>
      <label>{f.org}<input required name="org" autoComplete="organization" /></label>
      <label>{f.role}<input name="role" autoComplete="organization-title" /></label>
      <label>{f.email}<input required type="email" name="email" autoComplete="email" inputMode="email" /></label>
      <label>{f.phone}<input required name="phone" autoComplete="tel" inputMode="tel" /></label>
      {variant !== 'problem' && (
        <label>
          {f.type}
          <select name="type" defaultValue={types[0]}>
            {types.map((x) => <option key={x}>{x}</option>)}
          </select>
        </label>
      )}
      {variant === 'problem' && (
        <>
          <label>{f.problemFields.title}<input required name="ptitle" /></label>
          <label>{f.problemFields.current}<textarea name="current" /></label>
          <label>{f.problemFields.data}<textarea name="data" /></label>
          <label>{f.problemFields.goal}<input name="goal" /></label>
          <label>{f.problemFields.kpi}<input name="kpi" /></label>
          <label>{f.problemFields.budget}<input name="budget" /></label>
          <label>{f.problemFields.time}<input name="time" /></label>
        </>
      )}
      {variant !== 'problem' && <label>{f.message}<textarea name="message" /></label>}
      <DiamondButton type="submit">{busy ? '…' : f.submit}</DiamondButton>
    </form>
  )
}
