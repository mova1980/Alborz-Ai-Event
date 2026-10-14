export async function makeQr(url) {
  const QRCode = (await import('qrcode')).default
  return QRCode.toDataURL(url, {
    errorCorrectionLevel: 'M',
    margin: 1,
    width: 420,
    color: { dark: '#020810', light: '#ffffff' },
  })
}

export function statusUrl(origin, code) {
  return `${origin}/status/${encodeURIComponent(code)}`
}
