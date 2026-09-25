import QRCode from 'qrcode'

export async function makeQr(url) {
  const dataUrl = await QRCode.toDataURL(url, {
    errorCorrectionLevel: 'M',
    margin: 1,
    width: 420,
    color: { dark: '#020810', light: '#ffffff' },
  })
  return dataUrl
}

export function statusUrl(origin, code) {
  return `${origin}/status/${encodeURIComponent(code)}`
}
