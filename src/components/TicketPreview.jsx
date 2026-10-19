import { useEffect } from 'react'
import { formatFirstEntryFa, normalizeTicket, printPos80, slipInnerHtml, SLIP_CSS } from '../lib/ticket'
import '../styles/ticket.css'

const DEFAULTS = {
  title: 'پیش‌نمایش فیش ۸۰ میلی‌متر',
  lead: 'Axiom POS80U · کاغذ ۸۰ میلی‌متر. همین تصویر چاپ می‌شود. در پنجره چاپ: چاپگر POS80U، اندازه ۸۰mm، حاشیه هیچ.',
  confirm: 'چاپ روی POS80U',
  cancel: 'انصراف',
  pending: 'تاریخ و ساعت اولین ورود بعد از اسکن گیت روی فیش می‌آید.',
}

export default function TicketPreview({ open, ticket, onClose, labels }) {
  const L = { ...DEFAULTS, ...labels }
  const t = open && ticket ? normalizeTicket(ticket) : null
  const pending = t && !formatFirstEntryFa(t.firstEntryAt)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || !t) return null

  return (
    <div
      className="pos-preview-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pos-preview-title"
      onClick={onClose}
    >
      <div className="pos-preview-panel" dir="rtl" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2 id="pos-preview-title">{L.title}</h2>
          <p>{L.lead}</p>
        </header>
        <div className="pos-paper-wrap">
          <div className="pos-paper" dir="rtl" lang="fa">
            <style>{SLIP_CSS}</style>
            <div dangerouslySetInnerHTML={{ __html: slipInnerHtml(t) }} />
          </div>
        </div>
        {pending ? <p className="pos-preview-note">{L.pending}</p> : null}
        <div className="pos-preview-actions">
          <button type="button" className="pos-btn-cancel" onClick={onClose}>{L.cancel}</button>
          <button
            type="button"
            className="pos-btn-print"
            onClick={() => printPos80(t)}
          >
            {L.confirm}
          </button>
        </div>
      </div>
    </div>
  )
}
