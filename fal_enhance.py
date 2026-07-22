#!/usr/bin/env python3
"""Polish the client's real photos via fal nano-banana (Gemini image edit).
Keeps the exact same food; improves lighting, removes glare/clutter. Falls back
silently — if a job fails, we just keep the plain prepped photo."""
import base64, json, os, sys, pathlib, urllib.request, urllib.error

FAL_KEY = os.environ.get("FAL_KEY")
if not FAL_KEY:
    sys.exit("FAL_KEY not set")

IMG = pathlib.Path(__file__).parent / "assets" / "img"
OUT = IMG / "enh"
OUT.mkdir(parents=True, exist_ok=True)
MODEL = "fal-ai/nano-banana/edit"

KEEP = ("Keep the exact same sweets, snacks, trays and arrangement — do not change, "
        "add or remove any food. Photorealistic, same items.")

JOBS = [
    ("display.jpg", "display-enh.jpg",
     f"Professionally relight this Indian sweet-shop display case: warm inviting golden "
     f"boutique lighting, remove the harsh fluorescent glare and plastic-wrap reflections, "
     f"richer appetizing colours, crisp high-end food photography. {KEEP}"),
    ("display2.jpg", "display2-enh.jpg",
     f"Professionally relight this Indian sweet-shop display case: warm inviting golden "
     f"boutique lighting, remove harsh glare and plastic-wrap reflections, richer appetizing "
     f"colours, premium editorial food photography. {KEEP}"),
    ("catering-real.jpg", "catering-enh.jpg",
     f"Turn this into premium overhead catering food photography: warm appetizing light, "
     f"clean the stainless background, subtle depth, rich saffron tones, mouthwatering. {KEEP}"),
]

def call(payload):
    req = urllib.request.Request(f"https://fal.run/{MODEL}",
        data=json.dumps(payload).encode(),
        headers={"Authorization": f"Key {FAL_KEY}", "Content-Type": "application/json"},
        method="POST")
    with urllib.request.urlopen(req, timeout=300) as r:
        return json.loads(r.read().decode())

def data_uri(p):
    return "data:image/jpeg;base64," + base64.b64encode(p.read_bytes()).decode()

for src, dst, prompt in JOBS:
    sp = IMG / src
    if not sp.exists():
        print(f"[{src}] missing, skip", flush=True); continue
    print(f"[{src}] enhancing ...", flush=True)
    try:
        res = call({"prompt": prompt, "image_urls": [data_uri(sp)], "num_images": 1})
        url = res["images"][0]["url"]
        with urllib.request.urlopen(url, timeout=120) as r:
            (OUT / dst).write_bytes(r.read())
        print(f"[{src}] -> {dst} ({(OUT/dst).stat().st_size//1024}KB)", flush=True)
    except urllib.error.HTTPError as e:
        print(f"[{src}] HTTP {e.code}: {e.read().decode()[:300]}", flush=True)
    except Exception as e:
        print(f"[{src}] ERROR {e}", flush=True)
print("DONE", flush=True)
