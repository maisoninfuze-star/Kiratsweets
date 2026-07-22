#!/usr/bin/env python3
"""Prep the client's real photos into web-ready assets for the Kirat site."""
import pathlib
from PIL import Image, ImageOps

SRC = pathlib.Path(__file__).parent / "assets"
OUT = pathlib.Path(__file__).parent / "assets" / "img"
OUT.mkdir(parents=True, exist_ok=True)

def load(name):
    im = Image.open(SRC / name)
    im = ImageOps.exif_transpose(im)          # respect phone orientation
    return im.convert("RGB")

def save(im, name, w=None, quality=86):
    if w and im.width > w:
        h = round(im.height * w / im.width)
        im = im.resize((w, h), Image.LANCZOS)
    im.save(OUT / name, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"  -> {name}  {im.width}x{im.height}  {(OUT/name).stat().st_size//1024}KB")

def crop_frac(im, l, t, r, b):
    """Crop by fractions 0..1 of width/height."""
    W, H = im.width, im.height
    return im.crop((round(l*W), round(t*H), round(r*W), round(b*H)))

print("catering trays"); save(load("12df75cf-6d7c-4e39-bba6-580bc33e52f2.JPG"), "catering-real.jpg", 1600)
print("gold gift boxes"); save(load("366a7c35-a803-4a69-87c7-97b439bbca27.JPG"), "boxes-gold.jpg", 1400)
print("maroon boxes ladoo"); save(load("a1c25405-2ee1-460e-ae6b-fbb139d8e9f1.JPG"), "boxes-ladoo.jpg", 1400)
print("display case 1 (wide)"); save(load("7088d4c3-3548-47c2-acfb-116b19882b7b.JPG"), "display.jpg", 1600)
print("display case 2 (wide)"); save(load("c359bf98-c8f6-4685-8d70-9146327adc18.JPG"), "display2.jpg", 1600)

# story portrait crop from display case 1 (center 4:5)
d = load("7088d4c3-3548-47c2-acfb-116b19882b7b.JPG")
save(crop_frac(d, 0.20, 0.0, 0.80, 1.0), "story-real.jpg", 1000)

# celebration platter: crop out feet/floor at bottom + top clutter -> square
p = load("8fb792d6-62a0-4df6-9969-81f4c1c26916.JPG")
save(crop_frac(p, 0.0, 0.05, 1.0, 0.80), "platter.jpg", 1200)

# pink coconut barfi: center square
c = load("77f7172d-668a-4ed9-b4a4-159022b1250d.JPG")
save(crop_frac(c, 0.0, 0.12, 1.0, 0.88), "coconut.jpg", 1000)

# celebration platter also as a nice landscape gallery piece (top portion)
save(crop_frac(p, 0.02, 0.06, 0.98, 0.74), "platter-wide.jpg", 1400)

# LOGO badge from flyer (generous crop; will refine after viewing)
logo = load("741e4406-87cb-4904-a7aa-ad1e50846b16.JPG")
save(crop_frac(logo, 0.04, 0.08, 0.96, 0.52), "logo-badge.jpg", 900, quality=92)

print("done")
