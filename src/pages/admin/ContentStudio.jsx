import { useEffect, useMemo, useState } from 'react'
import { api, errorText } from '../../lib/api'
import { clone, deepMerge, DEFAULT_MEDIA, getPath, setPath } from '../../lib/cms'
import { IMAGE_SLOTS, SECTIONS } from './cmsSchema'

function readAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('فایل انتخاب نشد'))
    if (file.size > 1_800_000) return reject(new Error('حجم تصویر حداکثر ۱٫۸ مگابایت است.'))
    if (!/^image\/(jpeg|png|webp|gif|svg\+xml)$/.test(file.type)) {
      return reject(new Error('فقط JPG، PNG، WEBP، GIF یا SVG.'))
    }
    const r = new FileReader()
    r.onload = () => resolve(String(r.result || ''))
    r.onerror = () => reject(new Error('خواندن فایل ناموفق بود.'))
    r.readAsDataURL(file)
  })
}

export default function ContentStudio({ tab = 'text' }) {
  const [ready, setReady] = useState(false)
  const [defaults, setDefaults] = useState(null)
  const [fa, setFa] = useState(null)
  const [en, setEn] = useState(null)
  const [images, setImages] = useState({ ...DEFAULT_MEDIA })
  const [media, setMedia] = useState([])
  const [section, setSection] = useState(SECTIONS[0].id)
  const [q, setQ] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')
  const [dirty, setDirty] = useState(false)
  const [picker, setPicker] = useState(null)

  async function load() {
    const out = await api('/admin/content', { admin: true })
    const dfa = out.defaults?.fa
    const den = out.defaults?.en
    const c = out.content || {}
    setDefaults({ fa: dfa, en: den, images: { ...DEFAULT_MEDIA, ...(out.defaults?.images || {}) } })
    setFa(deepMerge(clone(dfa), c.fa || {}))
    setEn(deepMerge(clone(den), c.en || {}))
    setImages({ ...DEFAULT_MEDIA, ...(c.images || {}) })
    setMedia(out.media || [])
    setDirty(false)
    setReady(true)
  }

  useEffect(() => { load().catch((e) => setErr(errorText(e))) }, [])

  function touch() { setDirty(true); setMsg('') }

  function patch(lang, path, value, shared) {
    touch()
    if (shared) {
      setFa((s) => setPath(s, path, value))
      setEn((s) => setPath(s, path, value))
      return
    }
    if (lang === 'fa') setFa((s) => setPath(s, path, value))
    else setEn((s) => setPath(s, path, value))
  }

  function patchList(path, nextFa, nextEn) {
    touch()
    setFa((s) => setPath(s, path, nextFa))
    setEn((s) => setPath(s, path, nextEn))
  }

  async function save() {
    setBusy(true)
    setErr('')
    try {
      await api('/admin/content', {
        method: 'PUT',
        admin: true,
        body: {
          fa: { ...fa, lang: 'fa', dir: 'rtl' },
          en: { ...en, lang: 'en', dir: 'ltr' },
          images,
        },
      })
      setDirty(false)
      setMsg('ذخیره شد. در سایت عمومی پس از تازه‌سازی صفحه دیده می‌شود.')
    } catch (e) {
      setErr(errorText(e, 'ذخیره ناموفق بود.'))
    } finally {
      setBusy(false)
    }
  }

  async function uploadFile(file) {
    const data = await readAsDataUrl(file)
    const out = await api('/admin/media', {
      method: 'POST',
      admin: true,
      body: { name: file.name, mime: file.type, data },
    })
    setMedia((m) => [out.item, ...m.filter((x) => x.id !== out.item.id)])
    return out.item
  }

  async function onPickFile(e, apply) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    setBusy(true)
    setErr('')
    try {
      const item = await uploadFile(file)
      apply?.(item.url)
    } catch (ex) {
      setErr(errorText(ex, 'بارگذاری ناموفق بود.'))
    } finally {
      setBusy(false)
    }
  }

  async function removeMedia(id) {
    if (!window.confirm('این فایل از کتابخانه حذف شود؟')) return
    await api(`/admin/media/${id}`, { method: 'DELETE', admin: true })
    setMedia((m) => m.filter((x) => x.id !== id))
  }

  const visible = useMemo(() => {
    const s = q.trim()
    if (!s) return SECTIONS
    return SECTIONS.filter((sec) => {
      const blob = [sec.title, ...(sec.groups || []).flatMap((g) => [g.title, ...(g.fields || []).map((f) => f.label || f.itemLabel || '')])].join(' ')
      return blob.includes(s)
    })
  }, [q])

  if (!ready || !fa || !en) return <p>{err || 'در حال بارگذاری محتوای سایت…'}</p>

  const current = SECTIONS.find((s) => s.id === section) || SECTIONS[0]

  return (
    <div className="cms">
      <div className="ad-head">
        <h1>{tab === 'media' ? 'تصاویر و لوگوها' : 'محتوای سایت'}</h1>
        <p className="muted">قالب، هندسه و افکت‌ها ثابت می‌مانند. فقط متن و تصویر عوض می‌شود. فارسی و انگلیسی را با هم ویرایش کنید.</p>
      </div>
      {err ? <div className="form-error">{err}</div> : null}
      {msg ? <p className="cms-ok">{msg}</p> : null}

      {tab === 'media' ? (
        <MediaPanel
          images={images}
          media={media}
          busy={busy}
          onSlot={(key, url) => { setImages((s) => ({ ...s, [key]: url })); touch() }}
          onFile={(e, apply) => onPickFile(e, apply)}
          onDelete={removeMedia}
          setPicker={setPicker}
        />
      ) : (
        <div className="cms-layout">
          <aside className="cms-nav">
            <input className="cms-search" placeholder="جستجوی بخش…" value={q} onChange={(e) => setQ(e.target.value)} />
            {visible.map((s) => (
              <button key={s.id} type="button" className={s.id === current.id ? 'is-on' : ''} onClick={() => setSection(s.id)}>
                {s.title}
              </button>
            ))}
          </aside>
          <div className="cms-body">
            <h2>{current.title}</h2>
            {(current.groups || []).map((g, gi) => (
              <section key={gi} className="cms-group">
                {g.title ? <h3>{g.title}</h3> : null}
                {(g.fields || []).map((f) => (
                  <Field
                    key={f.path}
                    field={f}
                    fa={fa}
                    en={en}
                    patch={patch}
                    patchList={patchList}
                    onOpenPicker={(path, shared) => setPicker({ path, shared })}
                  />
                ))}
              </section>
            ))}
          </div>
        </div>
      )}

      <div className="cms-savebar">
        <button className="ad-btn" type="button" disabled={busy || !dirty} onClick={save}>
          {busy ? '…' : 'ذخیره تغییرات'}
        </button>
        <button
          className="ad-btn ghost"
          type="button"
          onClick={() => {
            if (!window.confirm('همه متن‌ها و تصاویر به نسخه اصلی سایت برگردد؟')) return
            setFa(clone(defaults.fa))
            setEn(clone(defaults.en))
            setImages({ ...DEFAULT_MEDIA, ...(defaults.images || {}) })
            touch()
          }}
        >
          بازگشت به متن اصلی
        </button>
        {dirty ? <span className="muted">ذخیره نشده</span> : <span className="muted">همه‌چیز ذخیره است</span>}
      </div>

      {picker ? (
        <Picker
          media={media}
          busy={busy}
          onClose={() => setPicker(null)}
          onFile={(e) => onPickFile(e, (url) => {
            if (picker.path.startsWith('images.')) {
              const key = picker.path.slice(7)
              setImages((s) => ({ ...s, [key]: url }))
              touch()
            } else {
              patch('fa', picker.path, url, true)
            }
            setPicker(null)
          })}
          onSelect={(url) => {
            if (picker.path.startsWith('images.')) {
              const key = picker.path.slice(7)
              setImages((s) => ({ ...s, [key]: url }))
              touch()
            } else {
              patch('fa', picker.path, url, true)
            }
            setPicker(null)
          }}
        />
      ) : null}
    </div>
  )
}

function MediaPanel({ images, media, busy, onSlot, onFile, onDelete, setPicker }) {
  return (
    <>
      <h2>تصاویر صفحات</h2>
      <div className="cms-slots">
        {IMAGE_SLOTS.map((s) => (
          <article key={s.key} className="cms-slot">
            <div className="cms-thumb">{images[s.key] ? <img src={images[s.key]} alt="" /> : null}</div>
            <div>
              <strong>{s.label}</strong>
              {s.hint ? <div className="muted">{s.hint}</div> : null}
              <div className="cms-row">
                <button type="button" className="ad-btn ghost" onClick={() => setPicker({ path: `images.${s.key}`, shared: true })}>انتخاب</button>
                <label className="ad-btn ghost cms-file">
                  بارگذاری
                  <input type="file" accept="image/*" hidden onChange={(e) => onFile(e, (url) => onSlot(s.key, url))} />
                </label>
              </div>
            </div>
          </article>
        ))}
      </div>
      <h2>کتابخانه فایل</h2>
      <label className="ad-btn cms-file" style={{ width: 'fit-content' }}>
        {busy ? '…' : 'بارگذاری تصویر جدید'}
        <input type="file" accept="image/*" hidden onChange={(e) => onFile(e)} />
      </label>
      <div className="cms-lib">
        {media.map((m) => (
          <article key={m.id} className="cms-lib-item">
            <img src={m.url} alt={m.name} />
            <div className="muted">{m.name}</div>
            <div className="cms-row">
              <button type="button" className="ad-btn ghost" onClick={() => navigator.clipboard.writeText(m.url)}>کپی آدرس</button>
              <button type="button" className="ad-btn ghost" onClick={() => onDelete(m.id)}>حذف</button>
            </div>
          </article>
        ))}
        {!media.length ? <p className="muted">هنوز فایلی بارگذاری نشده. تصاویر فعلی سایت از پوشه اصلی خوانده می‌شوند.</p> : null}
      </div>
    </>
  )
}

function Picker({ media, onClose, onSelect, onFile, busy }) {
  return (
    <div className="cms-modal" role="dialog">
      <div className="cms-modal-card">
        <header>
          <h3>انتخاب تصویر</h3>
          <button type="button" className="ad-btn ghost" onClick={onClose}>بستن</button>
        </header>
        <label className="ad-btn cms-file">
          {busy ? '…' : 'بارگذاری از رایانه'}
          <input type="file" accept="image/*" hidden onChange={onFile} />
        </label>
        <div className="cms-lib">
          {media.map((m) => (
            <button key={m.id} type="button" className="cms-lib-item" onClick={() => onSelect(m.url)}>
              <img src={m.url} alt={m.name} />
              <span className="muted">{m.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function Field({ field, fa, en, patch, patchList, onOpenPicker, basePath }) {
  const path = basePath ? `${basePath}.${field.path}` : field.path
  if (field.kind === 'list') {
    return (
      <ListField
        field={{ ...field, path }}
        fa={fa}
        en={en}
        patch={patch}
        patchList={patchList}
        onOpenPicker={onOpenPicker}
      />
    )
  }
  if (field.kind === 'strings') {
    return <StringsField field={{ ...field, path }} fa={fa} en={en} patchList={patchList} />
  }
  if (field.kind === 'image') {
    const url = getPath(fa, path) || getPath(en, path) || ''
    return (
      <div className="cms-field">
        <span className="cms-label">{field.label}</span>
        <div className="cms-img-row">
          {url ? <img src={url} alt="" /> : <span className="muted">بدون تصویر</span>}
          <button type="button" className="ad-btn ghost" onClick={() => onOpenPicker(path, true)}>انتخاب تصویر</button>
        </div>
      </div>
    )
  }
  const faVal = getPath(fa, path) ?? ''
  const enVal = getPath(en, path) ?? ''
  const Tag = field.kind === 'area' ? 'textarea' : 'input'
  if (field.shared) {
    return (
      <label className="cms-field">
        <span className="cms-label">{field.label}</span>
        {field.hint ? <span className="muted">{field.hint}</span> : null}
        <input value={faVal} onChange={(e) => patch('fa', path, e.target.value, true)} dir="ltr" />
      </label>
    )
  }
  return (
    <div className="cms-field">
      <span className="cms-label">{field.label}</span>
      {field.hint ? <span className="muted">{field.hint}</span> : null}
      <div className="cms-pair">
        <label>
          <span>فارسی</span>
          <Tag value={faVal} onChange={(e) => patch('fa', path, e.target.value)} rows={4} />
        </label>
        <label>
          <span>English</span>
          <Tag value={enVal} onChange={(e) => patch('en', path, e.target.value)} rows={4} dir="ltr" />
        </label>
      </div>
    </div>
  )
}

function ListField({ field, fa, en, patch, patchList, onOpenPicker }) {
  const faItems = getPath(fa, field.path) || []
  const enItems = getPath(en, field.path) || []
  const n = Math.max(faItems.length, enItems.length)

  function add() {
    const t = field.template ? clone(field.template) : {}
    if (t && 'id' in t && !t.id) t.id = `n${Date.now().toString(36)}`
    patchList(field.path, [...faItems, clone(t)], [...enItems, clone(t)])
  }
  function remove(i) {
    if (field.min && n <= field.min) return
    patchList(field.path, faItems.filter((_, x) => x !== i), enItems.filter((_, x) => x !== i))
  }
  function move(i, dir) {
    const j = i + dir
    if (j < 0 || j >= n) return
    const a = [...faItems]
    const b = [...enItems]
    ;[a[i], a[j]] = [a[j], a[i]]
    ;[b[i], b[j]] = [b[j], b[i]]
    patchList(field.path, a, b)
  }

  return (
    <div className="cms-list">
      <div className="cms-list-head">
        <span className="cms-label">{field.label || field.itemLabel}</span>
        <button type="button" className="ad-btn ghost" onClick={add}>+ {field.itemLabel || 'مورد'}</button>
      </div>
      {Array.from({ length: n }, (_, i) => (
        <article key={`${field.path}-${i}`} className="cms-item">
          <header>
            <b>{field.itemLabel} {i + 1}</b>
            <div className="cms-row">
              <button type="button" className="ad-btn ghost" onClick={() => move(i, -1)}>بالا</button>
              <button type="button" className="ad-btn ghost" onClick={() => move(i, 1)}>پایین</button>
              <button type="button" className="ad-btn ghost" onClick={() => remove(i)}>حذف</button>
            </div>
          </header>
          {(field.fields || []).map((f) => (
            <Field
              key={f.path}
              field={f}
              fa={fa}
              en={en}
              patch={patch}
              patchList={patchList}
              onOpenPicker={onOpenPicker}
              basePath={`${field.path}.${i}`}
            />
          ))}
        </article>
      ))}
    </div>
  )
}

function StringsField({ field, fa, en, patchList }) {
  const faItems = [...(getPath(fa, field.path) || [])]
  const enItems = [...(getPath(en, field.path) || [])]
  const n = Math.max(faItems.length, enItems.length, 0)
  function setAt(i, lang, v) {
    const a = [...faItems]
    const b = [...enItems]
    while (a.length < n) a.push('')
    while (b.length < n) b.push('')
    if (lang === 'fa') a[i] = v
    else b[i] = v
    patchList(field.path, a, b)
  }
  function add() {
    patchList(field.path, [...faItems, ''], [...enItems, ''])
  }
  function remove(i) {
    patchList(field.path, faItems.filter((_, x) => x !== i), enItems.filter((_, x) => x !== i))
  }
  return (
    <div className="cms-list">
      <div className="cms-list-head">
        <span className="cms-label">{field.label}</span>
        <button type="button" className="ad-btn ghost" onClick={add}>+ مورد</button>
      </div>
      {Array.from({ length: n }, (_, i) => (
        <div key={i} className="cms-pair cms-string-row">
          <input value={faItems[i] || ''} onChange={(e) => setAt(i, 'fa', e.target.value)} placeholder="فارسی" />
          <input value={enItems[i] || ''} onChange={(e) => setAt(i, 'en', e.target.value)} placeholder="English" dir="ltr" />
          <button type="button" className="ad-btn ghost" onClick={() => remove(i)}>حذف</button>
        </div>
      ))}
    </div>
  )
}
