#!/usr/bin/env python3
"""Generate site visuals with fal.ai (flux/dev) for Kirat Sweets & Snacks — authentic Indian mithai & snacks."""
import json, os, sys, time, urllib.request, urllib.error, pathlib

FAL_KEY = os.environ.get("FAL_KEY")
if not FAL_KEY:
    sys.exit("FAL_KEY not set")

MODEL = "fal-ai/flux/dev"
OUT = pathlib.Path(__file__).parent / "assets" / "img"
OUT.mkdir(parents=True, exist_ok=True)

# Cohesive look: warm, appetizing, premium Indian sweet-shop food photography
STYLE = ("professional food photography, appetizing and mouthwatering, warm golden hour light, "
         "shallow depth of field, macro detail, rich saffron gold and rose tones, clean premium editorial "
         "composition on dark warm slate or brass surface, marigold petals accents, no text, no watermark, "
         "authentic Indian sweets, vegetarian")

JOBS = [
    # id, prompt, image_size
    ("hero",
     f"Luxurious overhead flat-lay spread of assorted colourful Indian mithai sweets on ornate brass and silver thali plates — "
     f"golden jalebi, gulab jamun in syrup, diamond kaju katli with silver leaf, motichoor ladoo, pista barfi — scattered rose "
     f"petals and marigold, dramatic moody warm lighting, {STYLE}",
     "landscape_16_9"),
    ("shopfront",
     f"Warm inviting interior of an upscale Indian sweet shop, long glass display counter filled with rows of colourful fresh "
     f"mithai and namkeen snacks, glowing golden pendant lights, cozy premium ambience, wide shot, {STYLE}",
     "landscape_16_9"),
    ("catering",
     f"Elegant large catering platter for a celebration, assorted Indian sweets and golden samosas beautifully arranged on a "
     f"decorative silver tray with garnish, festive table setting, marigold flowers, {STYLE}",
     "landscape_16_9"),
    ("giftbox",
     f"An elegant open premium gift box of assorted Indian sweets arranged in neat rows, festive Diwali and Rakhi presentation "
     f"with a silk ribbon and diya lamp, warm bokeh background, {STYLE}",
     "landscape_4_3"),
    ("jalebi",
     f"Close-up of fresh crispy bright orange jalebi coils glistening with sugar syrup, stacked, steam, {STYLE}",
     "square_hd"),
    ("gulab_jamun",
     f"Close-up bowl of golden-brown gulab jamun soaked in glossy rose syrup, garnished with pistachio slivers, {STYLE}",
     "square_hd"),
    ("barfi",
     f"Close-up of neatly cut diamond-shaped kaju katli and pista barfi topped with edible silver varak, arranged in rows, {STYLE}",
     "square_hd"),
    ("ladoo",
     f"Close-up pile of round golden motichoor ladoo, fine boondi texture, one broken open, {STYLE}",
     "square_hd"),
    ("rasmalai",
     f"Close-up of soft rasmalai discs in creamy saffron milk, garnished with pistachio and almond slivers and saffron threads, {STYLE}",
     "square_hd"),
    ("soanpapdi",
     f"Close-up of flaky cube-shaped soan papdi with delicate layered strands, topped with chopped pistachio, {STYLE}",
     "square_hd"),
    ("samosa",
     f"Close-up of crispy golden fried samosas with flaky pastry, one broken open showing spiced potato filling, mint and "
     f"tamarind chutney in small bowls, {STYLE}",
     "square_hd"),
    ("pakora",
     f"Close-up of a heap of crispy golden mixed vegetable pakora fritters with green chutney, {STYLE}",
     "square_hd"),
]


def call(model, payload):
    req = urllib.request.Request(
        f"https://fal.run/{model}",
        data=json.dumps(payload).encode(),
        headers={"Authorization": f"Key {FAL_KEY}", "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        return json.loads(r.read().decode())


def download(url, dest):
    with urllib.request.urlopen(url, timeout=120) as r:
        dest.write_bytes(r.read())


def main():
    only = sys.argv[1:]
    for jid, prompt, size in JOBS:
        if only and jid not in only:
            continue
        dest = OUT / f"{jid}.jpg"
        if dest.exists() and dest.stat().st_size > 10000 and "force" not in only:
            print(f"[{jid}] exists, skip", flush=True)
            continue
        print(f"[{jid}] generating ({size}) ...", flush=True)
        try:
            res = call(MODEL, {
                "prompt": prompt,
                "image_size": size,
                "num_images": 1,
                "enable_safety_checker": True,
                "num_inference_steps": 34,
                "guidance_scale": 3.5,
            })
            url = res["images"][0]["url"]
            download(url, dest)
            print(f"[{jid}] saved -> {dest} ({dest.stat().st_size//1024} KB)", flush=True)
        except urllib.error.HTTPError as e:
            print(f"[{jid}] HTTP {e.code}: {e.read().decode()[:400]}", flush=True)
        except Exception as e:
            print(f"[{jid}] ERROR {e}", flush=True)
        time.sleep(1)
    print("DONE", flush=True)


if __name__ == "__main__":
    main()
