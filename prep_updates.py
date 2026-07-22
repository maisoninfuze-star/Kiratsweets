#!/usr/bin/env python3
"""Process the client's updated professional photos into web-ready site assets."""
import pathlib
from PIL import Image, ImageOps

SRC = pathlib.Path(__file__).parent / "assets"
OUT = SRC / "img"

def load(name):
    return ImageOps.exif_transpose(Image.open(SRC / name)).convert("RGB")

def save(im, name, w=None, q=87):
    if w and im.width > w:
        im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    im.save(OUT / name, "JPEG", quality=q, optimize=True, progressive=True)
    print(f"  {name}  {im.width}x{im.height}  {(OUT/name).stat().st_size//1024}KB")

def crop_frac(im, l, t, r, b):
    W, H = im.width, im.height
    return im.crop((round(l*W), round(t*H), round(r*W), round(b*H)))

# hero — boutique display case (landscape, full-bleed)
save(load("update 8.png"), "hero-boutique.jpg", 1600)
# story — celebration platter, portrait 4:5 centre crop
p = load("update 6.png")
save(crop_frac(p, 0.18, 0.0, 0.82, 1.0), "story-platter.jpg", 950)
# platter landscape (gallery / boxes)
save(p, "platter-pro.jpg", 1400)
# catering — Mix Vegetable single dish (keeps elegant gold title)
save(load("update 2.png"), "cater-mixveg.jpg", 1400)
# festive gift box (boxes)
save(load("update 5.png"), "box-gift.jpg", 1400)
# dal makhani (gallery)
save(load("update 4.png"), "dalmakhani.jpg", 1400)
# coconut barfi — centre square (menu card + gallery)
c = load("update 7.png")
save(crop_frac(c, 0.125, 0.0, 0.875, 1.0), "coconut-pro.jpg", 1000)
# pakora — square, cropped to avoid the baked-in title (menu card)
k = load("update 3.png")
save(crop_frac(k, 0.27, 0.04, 0.98, 0.96), "pakora-pro.jpg", 1000)
print("done")
