import { useState } from 'react'
import DiamondButton from './DiamondButton'
import { useI18n } from '../context/Language'

export default function FormBox({ variant = 'visit' }) {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const f = t.form

  if (sent) return <div className="form-success">{f.sent}</div>

  const types = variant === 'exhibit' ? f.boothTypes : f.visitTypes

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <label>{f.name}<input required name="name" /></label>
      <label>{f.org}<input required name="org" /></label>
      <label>{f.role}<input name="role" /></label>
      <label>{f.email}<input required type="email" name="email" /></label>
      <label>{f.phone}<input required name="phone" /></label>
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
      <DiamondButton type="submit">{f.submit}</DiamondButton>
    </form>
  )
}
