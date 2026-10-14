#!/usr/bin/env python3
"""Resize, de-white, crop frames. One file at a time to avoid OOM."""
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

Image.MAX_IMAGE_PIXELS = 25_000_000
UP = Path("/home/user/uploads")
OUT = Path("/home/user/public/images")
PUB = OUT


def load_thumb(path: Path, max_side=960) -> Image.Image:
    im = Image.open(path)
    im.load()
    im.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    return im.convert("RGBA")


def crop_colored_frame(im: Image.Image) -> Image.Image:
    rgb = np.array(im.convert("RGB"))
    h, w = rgb.shape[:2]
    if h < 40 or w < 40:
        return im
    c = np.concatenate(
        [
            rgb[:10, :10].reshape(-1, 3),
            rgb[:10, -10:].reshape(-1, 3),
            rgb[-10:, :10].reshape(-1, 3),
            rgb[-10:, -10:].reshape(-1, 3),
        ]
    )
    med = np.median(c, axis=0)
    r, g, b = med
    yellow = r > 185 and g > 155 and b < 110
    blue = b > 140 and r < 90 and g < 130
    if not (yellow or blue):
        return im

    def is_frame(px_row):
        rr, gg, bb = px_row.mean(axis=0)
        if yellow:
            return rr > 185 and gg > 155 and bb < 120
        return bb > 130 and rr < 100 and gg < 140

    top = 0
    while top < h // 5 and is_frame(rgb[top]):
        top += 1
    bot = h - 1
    while bot > h * 4 // 5 and is_frame(rgb[bot]):
        bot -= 1
    left = 0
    while left < w // 5 and is_frame(rgb[:, left]):
        left += 1
    right = w - 1
    while right > w * 4 // 5 and is_frame(rgb[:, right]):
        right -= 1
    pad = 2
    top = min(h - 2, max(0, top + pad))
    left = min(w - 2, max(0, left + pad))
    bot = max(top + 2, min(h, bot - pad + 1))
    right = max(left + 2, min(w, right - pad + 1))
    return Image.fromarray(rgb[top:bot, left:right]).convert("RGBA")


def flood_white(im: Image.Image, t=244) -> Image.Image:
    arr = np.array(im.convert("RGBA"))
    r = arr[:, :, 0].astype(np.int16)
    g = arr[:, :, 1].astype(np.int16)
    b = arr[:, :, 2].astype(np.int16)
    a = arr[:, :, 3]
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    near_white = (mn >= t) | ((mn >= t - 18) & ((mx - mn) <= 14) & (mn >= 228))
    arr[:, :, 3] = np.where(near_white, 0, a)
    return Image.fromarray(arr)


def crop_alpha(im: Image.Image, pad=6) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(im.width, r + pad)
    b = min(im.height, b + pad)
    return im.crop((l, t, r, b))


def fit(im: Image.Image, box=360) -> Image.Image:
    im = im.copy()
    im.thumbnail((box, box), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (box, box), (0, 0, 0, 0))
    canvas.paste(im, ((box - im.width) // 2, (box - im.height) // 2), im)
    return canvas


def save_png(im: Image.Image, dest: Path):
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "PNG", optimize=True)
    print(f"  {dest.name:22} {im.size} {dest.stat().st_size // 1024}k")


def process(src: Path, dest_name: str, *, frame=False, white=244, already_alpha=False, box=360):
    print("src", src.name)
    im = load_thumb(src, 960 if src.stat().st_size > 200_000 else 1100)
    if frame:
        im = crop_colored_frame(im)
    if not already_alpha:
        im = flood_white(im, white)
    else:
        # still punch residual paper
        im = flood_white(im, max(white, 250))
    im = crop_alpha(im)
    im = fit(im, box)
    save_png(im, OUT / dest_name)


JOBS = [
    ("Alborz_gov.png", "col-gov.png", dict(already_alpha=True, white=250)),
    ("سازمان بسیج علمی.jpg", "col-basij.png", dict(frame=True, white=246)),
    ("لوگو اتاق بازرگانی البرز.jpg", "col-chamber.png", dict(white=246)),
    ("وزارت ارتباطات و فناوری اطلاعات.jpg", "col-ict.png", dict(frame=True, white=248)),
    ("فاوا.jpg", "col-ista.png", dict(white=248)),
    ("شهرداری کرج.jpg", "col-karaj.png", dict(white=246)),
    ("Park.png", "col-park.png", dict(already_alpha=True, white=250)),
    ("شرکت-ارتباطات-زیرساخت.png", "col-tic.png", dict(already_alpha=True, white=248)),
    ("لوگو نظام مهندسی.jpg", "col-ne.png", dict(white=246)),
    ("لوگو مرکز کارشناسان دادگستری استان البرز.jpg", "col-expert.png", dict(white=246)),
    ("لوگو مرکز تحقیقات مسکن و ساختمان.jpg", "col-bhrc.png", dict(white=248)),
    ("لوگو صندوق پژوهش و فناوری غیر دولتی استان البرز.jpg", "col-artf.png", dict(white=246)),
    ("لوگو انجمن سفیران علم گستر سازمان مرکزی.jpg", "col-safir.png", dict(white=246)),
    ("لوگو فرماندهی انتظامی استان البرز.jpg", "col-fata.png", dict(frame=True, white=246)),
    ("لوگو وزارت ورزش و جوانان استان البرز.jpg", "col-sport.png", dict(white=246)),
    ("لوگو هیئت ورزش های الکترونیک استان.jpg", "col-esport.png", dict(white=240)),
    ("نماد_شرکت_مخابرات_ایرات_(سهامی_عام).jpg", "col-tci.png", dict(white=248)),
    ("لوگو شبکه البرز.jpg", "col-shabake.png", dict(white=248)),
    ("لوگو شهرک صنعتی دارویی برکت.jpg", "col-barakat.png", dict(white=246)),
    ("نظام صنفی کشور.jpg", "col-nasr.png", dict(white=248)),
    ("لوگوی سازمان مدیریت.jpeg", "col-imi.png", dict(white=248)),
    ("image-1.png", "col-kb.png", dict(white=248)),
    ("100.png", "col-merc.png", dict(already_alpha=True, white=250)),
]

def compress_photos():
    jobs = [
        ("earth-blue-marble.jpg", 2048, 78, "JPEG"),
        ("earth-night.jpg", 2048, 78, "JPEG"),
        ("event-poster.jpg", 1100, 78, "JPEG"),
        ("connection-lab.jpg", 1280, 76, "JPEG"),
        ("venue-merc.jpg", 1280, 76, "JPEG"),
        ("zone-exhibition.jpg", 1280, 76, "JPEG"),
        ("zone-summit.jpg", 1280, 76, "JPEG"),
        ("problem-wall.jpg", 1280, 76, "JPEG"),
        ("live-lab.jpg", 1280, 76, "JPEG"),
        ("og-cover.jpg", 1200, 78, "JPEG"),
    ]
    for name, side, q, fmt in jobs:
        p = PUB / name
        if not p.exists():
            print("missing", name)
            continue
        im = Image.open(p)
        im.load()
        before = p.stat().st_size
        im = im.convert("RGB")
        im.thumbnail((side, side * 2), Image.Resampling.LANCZOS)
        tmp = p.with_suffix(".tmp.jpg")
        im.save(tmp, "JPEG", quality=q, optimize=True, progressive=True)
        after = tmp.stat().st_size
        if after < before:
            tmp.replace(p)
            print(f"photo {name:24} {im.size} {before//1024}k -> {after//1024}k")
        else:
            tmp.unlink(missing_ok=True)
            print(f"photo {name:24} keep {before//1024}k")

    globe = PUB / "earth-globe.png"
    if globe.exists():
        im = Image.open(globe).convert("RGBA")
        im.thumbnail((900, 900), Image.Resampling.LANCZOS)
        webp = PUB / "earth-globe.webp"
        im.save(webp, "WEBP", quality=80, method=6)
        # also shrink png fallback
        rgb = Image.new("RGB", im.size, (2, 8, 16))
        rgb.paste(im, mask=im.split()[-1] if im.mode == "RGBA" else None)
        jpg = PUB / "earth-globe.jpg"
        rgb.save(jpg, "JPEG", quality=80, optimize=True)
        print(f"globe webp {webp.stat().st_size//1024}k jpg {jpg.stat().st_size//1024}k was {globe.stat().st_size//1024}k")


def shrink_existing_org():
    for name in ["org-merc.png", "org-nasr.png", "org-imi.png", "org-kb.png"]:
        p = PUB / name
        if not p.exists():
            continue
        im = Image.open(p).convert("RGBA")
        im = flood_white(im, 250)
        im = crop_alpha(im)
        im = fit(im, 360)
        before = p.stat().st_size
        save_png(im, p)
        print(f"  org shrink {name} {before//1024}k -> {p.stat().st_size//1024}k")


if __name__ == "__main__":
    for fname, dest, kw in JOBS:
        src = UP / fname
        if not src.exists():
            print("MISSING", fname)
            continue
        process(src, dest, **kw)
    # MERC lockup is wide — prefer emblem from org-merc if col-merc is too empty/wide
    shrink_existing_org()
    compress_photos()
